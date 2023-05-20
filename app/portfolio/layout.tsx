import HeaderComp from "./headerComp"


export default function shadcnLayout({children}:{children:React.ReactNode}){
    return (
        <section>
            <HeaderComp />
        {children}
        </section>
    );
    
}