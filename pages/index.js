import Head from 'next/head';
import React from 'react';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Hallowbie!</title>
            </Head>
            <main>
                <h1 className="title">
                    <span>Hallowbie! Halloween!</span>
                </h1>
            </main>
        </div>
    );
}
