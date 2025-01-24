// Load all presentation files
const scripts = [
    './lib/types/presentation_eng.js',
    './lib/types/presentation_ita.js',
    './lib/types/presentation_ger.js'
    // Add more script paths here if needed
];

scripts.forEach(script => {
    const scriptElement = document.createElement('script');
    scriptElement.src = script;
    scriptElement.onload = () => {
        console.log(`${script} loaded`);
        // Call the function dynamically
        const functionName = script.split('/').pop().replace('.js', '');
        console.log(`Function name: ${functionName}`); // Log the function name
        if (typeof window[functionName] === 'function') {
            window[functionName]();
        } else {
            console.error(`Function ${functionName} is not defined`);
        }
    };
    document.head.appendChild(scriptElement);
});