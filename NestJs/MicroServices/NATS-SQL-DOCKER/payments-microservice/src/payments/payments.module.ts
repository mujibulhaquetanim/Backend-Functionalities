import { Module } from "@nestjs/common";
import { NatsClientModule } from "src/nats-client/nats-client.module";

@Module({
    imports: [NatsClientModule],
    controllers: [],
    providers: [],
    exports: []
})
export class PaymentsModule { }