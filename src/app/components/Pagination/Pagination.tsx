import { useEffect, useState } from "react"

interface PaginationProps {
    totalRecords: number
    recordsPerPage: number
    cursor?: string
    cursorCallback?: (cursorItem: string) => void
}
export function Pagination({totalRecords, recordsPerPage, cursor = '', cursorCallback}: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [cursorPointer, setCursorPointer] = useState<Set<string>>(new Set<string>());
    const page = Math.ceil(totalRecords / recordsPerPage);
    const isFirst = currentPage === 1;
    const isLast = currentPage === page;

    useEffect(() => {
        const newCursorPointer = new Set<string>();
        cursorPointer.forEach(o => {
            newCursorPointer.add(o)
        });
        newCursorPointer.add(cursor);
        setCursorPointer(() => newCursorPointer);
    }, [cursor]);

    useEffect(() => {
        if (cursorCallback) {
            cursorCallback(Array.from(cursorPointer)[currentPage -1]);
        }
    }, [currentPage]);

    const btnCss = (param: boolean) => (
        `bg-sky-${!param ? '500' : '300'} p-2 rounded-sm text-gray-${!param ? '100' : '400'} ${param ? 'disabled' : 'cursor-pointer enabled'}`
    )

    return (
        <div className="py-2">
            <p>
                <span
                    role="button"
                    className={btnCss(isFirst)}
                    onClick={() => {
                        if (!isFirst) {
                            setCurrentPage(prev => {
                                prev--
                                return prev;
                            })}
                        }
                    }>previous</span>
                &nbsp;<span>{currentPage}</span>&nbsp;
                <span
                    role="button"
                    className={btnCss(isLast)}
                    onClick={() => {
                        if (!isLast) {
                            setCurrentPage(prev => {
                                prev++
                                
                                return prev;
                            })
                        }
                    }}>next</span>
            </p>
        </div>
    );

}