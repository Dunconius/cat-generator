// CatList.jsx
import CatCard from "./CatCard.jsx";


let catList = [
    "Fluffy",
    "Scruffy",
    "Puffy",
    "Diddy",
    "Kitty",
    "Iffy",
]

export default function CatList() {
    
    return (
        <section>
            {catList.map((cat, index) => {
                return <CatCard key={index} catName={cat}/>
            })}
        </section>
    );
}