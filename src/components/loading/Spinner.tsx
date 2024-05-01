import React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'dotlottie-player': any;
        }
    }
}

const Spinner: React.FC = () => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
        script.type = 'module';
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-9999"
        >
            <div className="transform rotate-0 animate-spin">
                <dotlottie-player
                    src="https://lottie.host/86e97aea-0d50-4094-8c56-e2e24572d7c5/2ORYvONlL5.json"
                    background="transparent"
                    speed="1"
                    style={{ width: '500px', height: '500px' }}
                    loop
                    autoplay
                ></dotlottie-player>
            </div>
        </div>
    );
};

/*
<script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>

    <dotlottie-player src="https://lottie.host/86e97aea-0d50-4094-8c56-e2e24572d7c5/2ORYvONlL5.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
* */

export default Spinner;