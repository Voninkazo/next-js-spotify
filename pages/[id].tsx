import React from "react";

const PageDetails = ({id}: any) => {
    console.log(id)
    return (
        <div>
            <p>details</p>
        </div>
    )
}

export async function getServerSideProps(context: any) {
  const trackId = context.params.id
  //const res = await fetch()

    return {
        props: {id : trackId}
    }
}


export default PageDetails

