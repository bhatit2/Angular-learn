import { AbstractControl, ValidationErrors} from '@angular/forms';


export class PasswordValidators{
    static oldPasswordMatch(control : AbstractControl) : Promise<ValidationErrors> | null{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(control.value !== '12345') resolve({invalidOldPassword : true})
                else resolve(null)
            }, 2000);
        })
    }
    static newPasswordMatch(control : AbstractControl) {
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');
        return {
            passwordMatch : newPassword !== confirmPassword
        }
    }
}