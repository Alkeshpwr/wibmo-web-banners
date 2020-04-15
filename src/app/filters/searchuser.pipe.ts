import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUserFilter'
})

export class SearchUserFilter implements PipeTransform {
  transform(user: any, searchText: any): any {

    if(searchText == null) return user;
    return user.filter(function(userName){
      return userName.loginId.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}