import { useEffect, useState } from "react"

interface PaginationProps {
    totalRecords: number
    recordsPerPage: number
    cursor?: string
    cursorCallback?: (cursorItem: string) => void
}
export function Pagination({totalRecords, recordsPerPage, cursor = '', cursorCallback}: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [cursorPointer, setCursorPointer] = useState<Map<string, string>>(new Map());
    const page = Math.ceil(totalRecords / recordsPerPage);
    const isFirst = currentPage === 1;
    const isLast = currentPage === page;

    useEffect(() => {
        setCursorPointer(() => {
            const set = new Map();
            set.set('zero', '');

            return set;
        })
    }, [setCursorPointer]);

    useEffect(() => {
        setCursorPointer((prev) => {
            const set = new Map(prev);
            set.set(cursor, cursor);

            return set;
        })
    }, [setCursorPointer, cursor]);

    useEffect(() => {
        if (cursorCallback) {
            const values = Array.from(cursorPointer.values());
            cursorCallback(values[currentPage -1]);
        }
    }, [currentPage]);

    const btnCss = (param: boolean) => (
        `background-color: var(--color-orange-${!param ? '500' : '300'}) p-2 rounded-sm text-gray-${!param ? '100' : '400'} ${param ? 'disabled' : 'cursor-pointer enabled'}`
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