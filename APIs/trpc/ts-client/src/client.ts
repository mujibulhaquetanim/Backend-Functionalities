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
    

}

main()