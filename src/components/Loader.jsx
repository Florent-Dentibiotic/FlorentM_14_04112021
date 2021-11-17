// import styled, { keyframes } from 'styled-components';

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// export const Loader = styled.div`
//     padding: 10px;
//     border: 6px solid #12002b;
//     border-bottom-color: transparent;
//     border-radius: 22px;
//     animation: ${rotate} 1s infinite linear;
//     height: 0;
//     width: 0;
// `;

export default function Loader() {
    return (
        <>
            <div className="p-4 border-8 border-green-900 border-solid rounded-br-3xl h-0 w-0 animate-spin"></div>
        </>
    );
}
