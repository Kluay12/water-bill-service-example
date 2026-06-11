import { Injectable } from '@nestjs/common';
import { CalculateDto } from '../model/admin/calculate.dto';

@Injectable()
export class AdminService {

    calculate(request: CalculateDto): number {
        const sum = request.numA + request.numB;
        return sum;
    }
}
