export interface TBankDetail {
    ifsc : string;
    bank : number;
    branch : string;
    address : string;
    city : string;
    district : string;
    state : string;
}

export interface TState {
    params : string;
    option : string;
    banks : TBankDetail[];
    isLoading : boolean;
    error : string;
}