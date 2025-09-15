import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED:Brand[] = [
    {
        id: uuid(),
        name: 'Volvo',
        createdAt: Date.now(),
    }, {
        id: uuid(),
        name: 'BMW',
        createdAt: Date.now(),
    }, {
        id: uuid(),
        name: 'Audi',
        createdAt: Date.now(),
    }
];