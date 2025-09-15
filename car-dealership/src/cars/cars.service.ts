import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
    private cars:Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id: uuid(),
            brand: 'Ford',
            model: 'Focus',
        },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException("No car found with id " + id);
        }
        
        return car;
    }

    create(createCarDto: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car);
        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        let carDb = this.findOneById(id);

        if (updateCarDto.id && updateCarDto.id !== id) {
            throw new NotFoundException(`Car id is not valid inside body`);
        }

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDb = {
                    ...carDb,
                    ...updateCarDto,
                    id,
                }
                return carDb;
            }

            return car;
        });
        return carDb;
    }

    delete(id: string) {
        const car = this.findOneById(id);
        if (!car) {
            throw new NotFoundException("No car found with id " + id);
        }
        this.cars = this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;
    }
}
