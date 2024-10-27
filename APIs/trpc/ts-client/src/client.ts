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
    document.querySelector<HTMLSpanElement>('#hello')!.innerHTML = result
}

main()