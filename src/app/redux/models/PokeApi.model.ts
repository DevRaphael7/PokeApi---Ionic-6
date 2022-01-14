export interface PokeApi{
    abilities: [
        {
            ability: {
                name: string;
            }
        }
    ];
    name: string;
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            };
        };
    };
    height: number;
    weight: number;
    id: number,
    types: [
        {
            type: {
                name: string;
            };
        }
    ];
};