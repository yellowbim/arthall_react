import RoutersTest from './Router/RoutersTest';
import PagingFooter from './components/comPagingTest/PagingFooter'
import FormTest from './components/formTest';
import KaKaoMapApi from "./components/pagingTest/kakaoMapApi";

export default function PagingTest() {
    return (
        <>
            {/*<FunctionKaKaoMap/>*/}
            <KaKaoMapApi/>
            <RoutersTest/>
            <PagingFooter/>
            <FormTest/>
            <br/>
        </>
    )
}




