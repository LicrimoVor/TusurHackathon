import { Header } from '@/widgets/Header/Header';
import { AppRouter } from './providers/AppRouter';
import cls from './styles/App.module.scss';
import { useAppInit } from './lib/useAppInit';
import { LoaderPage } from '@/pages/LoaderPage/LoaderPage';

function App() {

    const [isLoading, isAuth] = useAppInit();

    return (
        <div className={cls.app}>
            <Header />
            {isLoading
                ? <LoaderPage/>
                : <AppRouter isAuth={isAuth} />}
        </div>
    )
}

export default App
