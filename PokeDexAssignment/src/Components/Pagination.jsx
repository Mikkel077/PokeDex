export default function Pagination({page, onNext, onPrev, disableNext, disablePrev}) {

    return (
        <div className="flex justify-center space-x-4 mt-4">
            <button
                onClick={onPrev}
                disabled={disablePrev}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
                Previous
            </button>
            <span className="self-center">Page {page + 1}</span>
            <button
                onClick={onNext}
                disabled={disableNext}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    )
}