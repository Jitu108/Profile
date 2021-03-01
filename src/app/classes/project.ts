import { VisisbleItem } from './visisble-item';
export class Project {
    Order: number;
    Visible: boolean;
    Role: string;
    Title: string;
    Details: string;
    Responsibilities: VisisbleItem[];
    Technologies: VisisbleItem[];
}
