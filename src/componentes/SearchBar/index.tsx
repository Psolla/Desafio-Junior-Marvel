/*import React, { useRef } from "react";

import { fetchHeroes } from "../../util"

export default function SearchBar({ setter }) {
    let input = useRef<HTMLInputElement>('')

    const handleClick = async (e) => {
        let value = input.current.value
        if (value === '') return

        try {
            let heroes = await fetchHeroes(value)
            setter(heroes);
        } catch (err) {
            return console.error(err);
        }

    }

    return (
        <form>
            <input type="text" placeholder="Buscar um herói" ref={input}/>
            <button onClick={handleClick}>Buscar</button>
        </form>
    )
} 

/*import React, { useRef } from "react";

interface Props {
  setter: (heroes: Hero[]) => void;
}

export default function SearchBar({ setter }: Props) {
  const input = useRef<HTMLInputElement>(null);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (input.current) {
      const value = input.current.value;
      if (value === "") return;

      try {
        const heroes = await fetchHeroes(value);
        setter(heroes);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <form>
      <input type="text" placeholder="Buscar um herói" ref={input} />
      <button onClick={handleClick}>Buscar</button>
    </form>
  );
}

interface Hero {
  id: number;
  name: string;
}

async function fetchHeroes(value: string): Promise<Hero[]> {
  // implementação da função fetchHeroes
  return [];
}*/