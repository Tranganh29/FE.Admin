import { Role } from './../models/role';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DataService } from '../data.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  constructor( 
    private dataServices: DataService,
    private messageService : MessageService,
    private configmationService: ConfirmationService
    ) { }

 public roles: Role[] =[];
 public roleDialog = false;
 public newRole : Role ={
   id: 0,
   name:'',
   description:'',
   deleted: false,
 };

 public  role: Role = Object.assign({}, this.newRole);
 public submitted = true;

  ngOnInit(): void {
    this.dataServices.getAllRoles().subscribe((data) =>{
      this.roles = data;
      console.log('Role: ', data);
    });
}

public editRole(role: Role):void{
  console.log('edit role:' , role);
  this.role = role;
  this.roleDialog= true;
}


public deleteRole(role: Role):void{
  console.log('delete role:' , role);
  this.configmationService.confirm({
    message:'Are you sure want to delete'+role.name+'?',
    header: 'Confirm',
    icon:'pi pi-exclamation-triangle',
    accept:() =>{
      this.messageService.add({
        severity:' success',
        summary:'Successful',
        detail: ' role Deleted',
        life: 3000,
      });

    },

  });
}

public openNew():void{
  console.log('openNew');
  this.role = Object.assign({}, this.newRole);
  this.roleDialog = true;

}


public hideDialog(cancel = true, success = true):void{
  console.log('hideDialog:');
  this.roleDialog = false;
  if(cancel){
    this.messageService.add({
      severity:' info',
      summary:'Cancel',
      detail: 'Không thêm nữa',
      life: 3000,
    });
  }else if(success){
    this.messageService.add({
      severity:' success',
      summary:'Done!',
      detail: 'Thêm mới quyền thành công',
      life: 3000,
    });
  }
  else{
    this.messageService.add({
      severity:' error',
      summary:'Error!',
      detail: 'Thêm mới quyền bị lỗi',
      life: 3000,
    });
  }
}

public saveRole():void{
  console.log('saveRole:' , this.role);
  this.dataServices.postRole(this.role).subscribe(
      (data) =>{
        console.log(' return data =', data);
        this.hideDialog(false,true);
      },
      (error)=>{
        console.log(' error');
        this.hideDialog(false,true);
      }
      );
    }
   

}
