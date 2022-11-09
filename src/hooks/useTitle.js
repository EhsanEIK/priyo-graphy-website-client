import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Priyo Graphy-${title}`;
    }, [title])
}

export default useTitle;