import SiteHeader from "./SiteHeader";
import SiteFooter from './SiteFooter';

export default function SiteLayout({children}: React.PropsWithChildren<unknown>)
{
    return (
        <>
            <SiteHeader />
            {children}
            <SiteFooter />
        </>
    )
}