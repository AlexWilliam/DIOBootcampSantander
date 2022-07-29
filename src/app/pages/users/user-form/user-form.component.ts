import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    userForm: FormGroup;
    users: Array<User> = [];
    userId: number = 0;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private actRoute: ActivatedRoute,
        private router: Router
    ) { 
        this.userForm = this.fb.group({
            id: 0,
            nome: "",
            sobrenome: "",
            idade: 0,
            profissao: ""
        });
    }

    ngOnInit(): void {
        this.actRoute.paramMap.subscribe(params => {
            this.userId = Number(params.get('id'));
        })
        this.getUsers();
        if(this.userId !== 0){
            this.userService.getUser(this.userId).subscribe(response => {
                this.userForm.patchValue({
                    id: response[0].id,
                    nome: response[0].nome,
                    sobrenome: response[0].sobrenome,
                    idade: response[0].idade,
                    profissao: response[0].profissao
                })
            })
        }
    }

    getUsers(): void {
        this.userService.getUsers().subscribe(response => {
            this.users = response
        })
    }

    createUser(): void {
        this.userForm.get('id')?.patchValue(Number(this.users[this.users.length-1].id)+1);
        this.userService.postUser(this.userForm.value).subscribe(result => {
            console.log("Usuário cadastrado com sucesso!");
        }, (err) => {
            console.log("Erro ao atualizar!", err)
        }, () => {
            this.router.navigate(['/']);
        });
    }

    updateUser(): void {
        this.userService.updateUser(this.userId, this.userForm.value).subscribe(response => {
            console.log("Usuário atualizado", response);
        }, (err) => {
            console.log("Erro ao atualizar!", err)
        }, () => {
            this.router.navigate(['/']);
        });
    }

    actionButton(): void {
        if(this.userId !== 0){
            this.updateUser();
        }else {
            this.createUser();
        }
    }

}
