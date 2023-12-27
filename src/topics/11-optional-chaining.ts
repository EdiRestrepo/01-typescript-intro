export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Edison',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Edison', 'Dani']
}

const returnChildrenNumber = (passenger: Passenger): number=>{
    
    const howManyChildren = passenger.children?.length || 0;

    // const howManyChildren = passenger.children!.length;

    console.log(passenger.name, 'tiene ',howManyChildren, ' hijos');

    return howManyChildren;

}

returnChildrenNumber(passenger2);