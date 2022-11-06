import User from "../../../domain/entities/User";
import UserCreationDto from "../../../application/dtos/IUserCreationDto";
import UserDto from "../../../application/dtos/UserDto";
import UserMapperInterface from "../../../application/mappers/IUserMapper";

export default class UserMapper implements UserMapperInterface{
    userCreationDtoToUser(userData: UserCreationDto): User {
        const user = {
            email: userData.email,
            password: userData.password,
            personalInformation: {
                firstName: userData.personalInformation.firstName,
                surname: userData.personalInformation.surname,
                sex: userData.personalInformation.sex,
                documentType: userData.personalInformation.documentType,
                documentNumber: userData.personalInformation.documentNumber,
                phoneNumberCountryCode: userData.personalInformation.phoneNumberCountryCode,
                phoneNumber: userData.personalInformation.phoneNumber
            }
        }
        return new User(user.email, user.password, user.personalInformation);
    }
    userToUserDto(user: User): UserDto {
        const userResponse: UserDto = {
            id: user.id ? user.id : "",
            email: user.email,
            personalInformation: {
                firstName: user.personalInformation.firstName,
                surname: user.personalInformation.surname,
                sex: user.personalInformation.sex,
                documentType: user.personalInformation.documentType,
                documentNumber: user.personalInformation.documentNumber,
                phoneNumberCountryCode: user.personalInformation.phoneNumberCountryCode,
                phoneNumber: user.personalInformation.phoneNumber
            }
        }
        return new UserDto(userResponse.id, userResponse.email, userResponse.personalInformation);
    }
}