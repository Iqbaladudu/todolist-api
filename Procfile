web: trap '' SIGTERM; concurrently & tsc -w & nodemon dist/js/app.js & wait -n; kill -SIGTERM -$$; wait