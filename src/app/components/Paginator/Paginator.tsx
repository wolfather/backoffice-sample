import { memo } from "react"

interface PaginatorProps {
    totalRecords: number
    recordsPerPage: number
    currentPage: number
    onPageChange: (cursorItem: number) => void
}

function PaginatorComponent({totalRecords, recordsPerPage, onPageChange, currentPage}: PaginatorProps) {
    const page = Math.ceil(totalRecords / recordsPerPage);
    const isFirst = currentPage === 1;
    const isLast = currentPage === page;

    const btnCss = (param: boolean) => (
        `background-color: var(--color-orange-${!param ? '500' : '300'}) p-2 rounded-sm text-gray-${!param ? '100' : '400'} ${param ? 'disabled' : 'cursor-pointer enabled'}`
    )

    return (
        <div 
            data-cy='paginator' 
            className="py-2">
            <p>
                <span
                    data-cy='paginator-previous'
                    role="button"
                    className={btnCss(isFirst)}
                    onClick={() => {
                        if (!isFirst) {
                            onPageChange(currentPage - 1);
                        }
                    }}>previous</span>
                &nbsp;<span data-cy='paginator-currentPage'>{currentPage}</span>&nbsp;
                <span
                    data-cy='paginator-next'
                    role="button"
                    className={btnCss(isLast)}
                    onClick={() => {
                        if (!isLast) {
                            onPageChange(currentPage + 1)
                        }
                    }}>next</span>
            </p>
        </div>
    );
}

export const Paginator = memo(PaginatorComponent);
