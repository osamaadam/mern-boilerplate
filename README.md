# MERN stack boilerplate

This is a boilerplate of my most common MERN stack setup. I'm using typescript on the backend and usually React on the frontend.

I didn't include the frontend in this template because you should use the latest version of CRA or equivalent. This should also work with Angular if that's your thing. Just make sure the <em>package.json</em> on the frontend has the following field.

```json
{
  "name": "client"
}
```

After installing your frontend of choice, run the following command on the root directory of this template.

<strong>Notice that these commands won't work unless you're in the root directory.</strong>

```sh
yarn
```

That's it god bless yarn workspaces.

Here are a couple of important Node scripts to run your project.

```sh
yarn start:server
```

To start the backend on its own without the frontend.

similarly, to start the frontend on its own,

```sh
yarn start:client
```

You'll likely usually start the server in watch mode though. So, to start the backend on its own in watch mode:

```sh
yarn server:watch
```

Finally, to run both the frontend and the backend concurrently:

```sh
yarn dev
```

If you're a 10x big brain developer you could use the docker environment to develop locally with minimal setup.

<strong>Notice that you'll still need to set up a frontend of your own as mentioned earlier.</strong>

```sh
docker-compose up
```

This should also run a MongoDB server in its own container.

To close everything down:

```sh
docker-compose stop
```
