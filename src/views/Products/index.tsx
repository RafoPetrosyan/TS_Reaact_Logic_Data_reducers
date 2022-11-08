import React, {useEffect} from 'react';

const Products = () => {



    // function createLoggedPair<S extends string, T extends string | number>(v1: S, v2: T): [S, T] {
    //     console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    //     return [v1, v2];
    // }
    //
    // useEffect(() => {
    //     createLoggedPair('5', 5)
    // }, [])

    function createLoggedPair<S extends string | number, T>(v1: S, v2: T): [S, T] {
        // console.log(`creating pair: v1='${v1}', v2='${v2}'`);
        return [v1, v2];
    }

    useEffect(() => {
        console.log(createLoggedPair('5', {name: "name"}))
    }, [])

    return (
        <div>
            Products
        </div>
    )
};

export default Products;