import { AdditionalSearchCriteria } from './AdditionalSearchCriteria.pojo';

export class reportReq {
   public additionalSearchCriteria:AdditionalSearchCriteria;
   public endDate: string;
   public geoId: string;
   public limit: string;
   public offset: string;
   public programId: string;
   public readFromDBOnly: string;
   public reportId: number;
   public reportOutputFormat: string;
   public reportUIName: string;
   public startDate: string;
   public status: string;
   public userId: string
}
