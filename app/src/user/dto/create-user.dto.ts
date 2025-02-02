import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        required: true
    })
    email: string;

    @ApiProperty({
        required: true
    })
    firstname: string;

    @ApiProperty({
        required: true
    })
    lastname: string;
}
