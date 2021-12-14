export default function Campanha(){
    return (
        <></>
    )
}

export async function getServerSideProps(context){
    const {nome} = context.query;

    console.log(nome)
}