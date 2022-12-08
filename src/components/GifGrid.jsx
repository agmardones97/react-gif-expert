import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";



export const GifGrid = ({category}) => {

    

    const {images, isLoading} = useFetchGifs( category );
    console.log({images,isLoading})
    
    return (
        <>
            <h3>{category}</h3>
            {
                //Primera forma de resolver loading
                // isLoading
                // ? (<h2>Cargando...</h2>)
                // : null

                //Segunda forma de resolver Loading
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        // <li key={id}>{title}</li>
                        <GifItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }

            </div>
        </>
    )
}