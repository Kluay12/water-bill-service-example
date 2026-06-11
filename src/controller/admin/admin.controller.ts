import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalculateDto } from '../../model/admin/calculate.dto';
import { AdminService } from '../../service/admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Get()
    getAdmin(): string {
        return "Admin endpoint";
    }

    @Post('/calculate')
    calculate(@Body() request: CalculateDto) {
        const sum = this.adminService.calculate(request);
        return sum;
    }
    
}
