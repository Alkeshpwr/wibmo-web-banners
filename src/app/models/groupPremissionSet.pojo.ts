import { reportPermissionsData } from './loginmodels/reportPermissionsData.pojo';

export class GroupPremissionSet {
    public id:number;
    public groupName:string;
    public decription:string;
    public status:number;
    public createdDt:number;
    public reportPermissions:reportPermissionsData;
    public premission:any;
}