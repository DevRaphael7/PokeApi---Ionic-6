import { DataApi } from "src/app/redux/models/data.model";
import { PokeApi } from "src/app/redux/models/PokeApi.model";

export const pokemon1: PokeApi = {
    abilities: [
        {
            ability: {
                name: 'Teste'
            }
        }
    ],
    name: "Teste",
    sprites: {
        other: {
            dream_world: {
                front_default: "Teste"
            }
        }
    },
    height: 0,
    weight: 0,
    id: 0,
    types: [
        {
            type: {
                name: "Test"
            }
        }
    ]
}

export const pokemon2: DataApi[] = [
    {
        abilidades: ['Teste'],
        altura: 10,
        id: 120,
        img: 'Teste',
        largura: 10,
        nome: 'Test',
        type: ['Test']
    }
]