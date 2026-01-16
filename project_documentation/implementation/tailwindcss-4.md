# Tailwind CSS 4 Turborepo & Next.js 15 Implementation

## Procedure

<div class="bg">
    <ol>
        <li>
            <div class="bg">
                Initialize Turborepo
                <br/>
<pre><code>
    pnpm init
    pnpm dlx create-turbo@latest
</code></pre>
            </div>
        </li>
        <li>
            <div class="bg">
                Add Next.js Applications
                <br/>   
<pre><code>
    cd apps
    pnpm dlx create-next-app@latest <app-name>
</code></pre>
            </div>
        </li>
        <li>
            <div class="bg">
                Add Tailwind CSS
                <br/>   
<pre><code>
    pnpm install -D tailwindcss@latest postcss@latest autoprefixer@latest --filter=@store-e-tail-turbo/<app-name>
    pnpm dlx tailwindcss init
</code></pre>
            </div>
        </li>
        <li>
            <div class="bg">
                Configure Tailwind CSS 
                <br/>
<pre><code>
    <!-- tailwind.config.js -->
    module.exports = {
        content: [
            "../../packages/ui/**/*.{js,ts,jsx,tsx}",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
    }
</code></pre>
            </div>
        </li>
        <li>
            <div class="bg">
                Set up Global Styles    
                <br/>
<pre><code>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</code></pre>
            </div>
        </li>
        <li>
            <div class="bg">
                Import this file in your _app.tsx file  
                <br/>
<pre><code>
    import '../styles/globals.css'; 
</code></pre>
            </div>
        </li>
        <li>
            <div class="bg">
                Create a shared UI package
                <br/>
<pre><code>
    mkdir packages/ui
    cd packages/ui
    pnpm init -y
</code></pre>
            </div>
        </li>
        <li>
            <div class="bg">    
                Install React and Taiwind in each shared package
                <br/>
<pre><code>
    pnpm install react react-dom tailwindcss postcss autoprefixer
</code></pre>
            </div>
        </li>
        <li>
            <div class="bg">
                Update tailwind.config.js in the shared package to match monorepo structure
                <br/>
<pre><code>
    <!-- tailwind.config.js -->
    module.exports = {
        content: [
            "../../packages/ui/**/*.{js,ts,jsx,tsx}",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
           plugins: [],
    }
</code></pre>
            </div>
        </li>
        <li>
            <div class="bg">
                Link Shared Components:
                - Export reusable components from `/packages/ui` 
                - Import them in Next.js app as modules
            </div>
        </li>
        <li>
            <div class="bg">
                Troubleshooting
                <ul>
                    <li>Enable Tailwind Scanning for Shared Components</li>
                    <li> Tailwind should scan <code>/apps</code> and <code>/packages</code></li>
                    <li>include <code>/apps</code> & <code>/packages</code> paths in `content` array for each app's `tailwind.config.js`</li>
                </ul>
                If code updates are not reflected:
                <br/>
<pre><code>
    turbo clean
</code></pre>
            </div>
        </li>
    </ol>
</div>