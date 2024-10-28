import {createTRPCProxyClient, httpBatchLink} from '@trpc/client';
import {AppRouter} from '../../express-server/src/index';

const client = createTRPCProxyClient<AppRouter>({
    links: [httpBatchLink({
        url: 'http://localhost:3000/trpc',
    })]
})

async function main(){
    const result = await client.hello.query()
    console.log(result);
    document.querySelector<HTMLSpanElement>('#hello')!.innerHTML = result;

    // Set up the event listener for the input element
    document.querySelector<HTMLInputElement>('#greeting')!.addEventListener('input', async (e) => {
        const greeting = (e.target as HTMLInputElement).value;
        try {
            const result2 = await client.logToServer.mutate(greeting);
            document.querySelector<HTMLSpanElement>('#input')!.innerHTML = result2;
            console.log(result2);
        } catch (error) {
            console.error('Error logging to server:', error);
        }
    });
    
    const result3 = await client.users.get.query({userId: '143'});
    const result4 = await client.users.updateUser.mutate({userId: '143', name: 'Shraddha kapoor'});
    //without nested queries
    // const result3 = await client.getUser.query();
    console.log(result3);
    console.log(result4);

}

main()