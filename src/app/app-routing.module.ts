import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
    {
        path: "",
        component: UsersListComponent
    },
    {
        path: "cadastrar",
        component: UserFormComponent
    },
    {
        path: "editar/:id",
        component: UserFormComponent
    },
    {
        path: "data-binding",
        component: DataBindingComponent
    },
    {
        path: "listaTarefas",
        component: TodoListComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
