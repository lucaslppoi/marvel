import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CreatorDocument = HydratedDocument<Creator>;

@Schema()
export class Creator {
    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    role: string;

    @Prop()
    comics: string[];
}

export const CreatorSchema = SchemaFactory.createForClass(Creator);
