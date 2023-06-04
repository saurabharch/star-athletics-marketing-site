import Link from 'next/link'

export function Logo(props: React.ComponentProps<'svg'>) {
  return (
    <Link className="group" href="/">
      <span className="sr-only">Star Athletics</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 343 69" {...props}>
        <g fill="none">
          <path
            className="fill-cyan-500"
            fill="currentColor"
            d="M190.13 28.668h8.868l9.673 24.814h-9.078l-1.296-3.645h-7.886l-1.227 3.645h-8.832l9.778-24.814Zm4.311 8.657-2.032 6.133h4.03l-1.998-6.133Zm23.568 16.648c-2.476 0-4.31-.532-5.502-1.595-1.192-1.063-1.787-2.716-1.787-4.96V40.83h-2.594v-5.783h2.558v-4.136h7.851v4.136h3.996v5.783h-3.996v4.907c0 .887.193 1.49.578 1.805.386.315.918.473 1.595.473a6.317 6.317 0 0 0 1.472-.21v5.537c-.42.187-1.01.339-1.77.456-.76.116-1.56.175-2.4.175Zm19.959-19.417c1.285 0 2.354.234 3.206.701.853.468 1.53 1.07 2.033 1.805.503.736.853 1.56 1.052 2.471.198.911.298 1.823.298 2.734v11.215h-8.131V43.67c0-.935-.147-1.59-.439-1.963-.292-.374-.73-.56-1.314-.56-.467 0-.888.204-1.262.613-.373.409-.56 1.057-.56 1.945v9.778h-8.096V26.986h8.096V37.08h.07c.467-.678 1.133-1.268 1.997-1.77.865-.502 1.881-.754 3.05-.754Zm10.144-7.57h8.272v26.496h-8.272V26.986Zm24.27 14.825c0-.654-.24-1.191-.719-1.612-.479-.42-1.127-.63-1.945-.63-.888 0-1.577.245-2.068.735-.49.49-.771.993-.841 1.507h5.572Zm6.974 2.629c0 .304-.006.613-.018.929-.011.315-.029.578-.052.788h-12.407c.023.327.134.62.333.876.199.257.444.48.736.666.292.187.62.327.981.42a4.4 4.4 0 0 0 1.104.141c.748 0 1.373-.134 1.875-.403.503-.269.882-.567 1.14-.894l5.747 2.91c-.818 1.331-2.003 2.382-3.557 3.154-1.554.77-3.359 1.156-5.415 1.156-1.332 0-2.629-.21-3.89-.63a9.915 9.915 0 0 1-3.347-1.876c-.97-.83-1.747-1.863-2.331-3.102-.584-1.238-.876-2.675-.876-4.31 0-1.52.268-2.892.806-4.119.537-1.226 1.267-2.266 2.19-3.119.923-.853 2.01-1.513 3.26-1.98 1.25-.467 2.587-.7 4.013-.7 1.448 0 2.769.25 3.96.753a8.973 8.973 0 0 1 3.067 2.102c.853.9 1.513 1.969 1.98 3.207.467 1.239.701 2.582.701 4.03Zm10.88 9.533c-2.476 0-4.31-.532-5.502-1.595-1.191-1.063-1.787-2.716-1.787-4.96V40.83h-2.594v-5.783h2.559v-4.136h7.85v4.136h3.996v5.783h-3.996v4.907c0 .887.193 1.49.579 1.805.385.315.917.473 1.594.473a6.317 6.317 0 0 0 1.472-.21v5.537c-.42.187-1.01.339-1.77.456-.759.116-1.56.175-2.4.175Zm6.781-18.926h8.096v18.435h-8.096V35.047Zm-.14-5.327c0-.561.11-1.093.333-1.595.222-.502.525-.94.911-1.314a4.456 4.456 0 0 1 1.35-.894 4.11 4.11 0 0 1 1.647-.333c.56 0 1.086.111 1.577.333.49.222.929.52 1.314.894.386.374.69.812.911 1.314.222.502.333 1.034.333 1.595a3.987 3.987 0 0 1-1.244 2.926 4.484 4.484 0 0 1-1.314.859c-.49.21-1.017.315-1.577.315a4.362 4.362 0 0 1-2.997-1.174 3.987 3.987 0 0 1-1.244-2.926Zm22.026 24.463c-1.566 0-3.003-.234-4.311-.7-1.309-.468-2.442-1.134-3.4-1.999a9.112 9.112 0 0 1-2.243-3.119c-.537-1.215-.806-2.582-.806-4.1 0-1.496.275-2.857.824-4.083a9.055 9.055 0 0 1 2.295-3.137c.982-.865 2.132-1.53 3.453-1.998 1.32-.467 2.75-.7 4.293-.7.63 0 1.268.052 1.91.157.643.105 1.262.251 1.858.438a13.46 13.46 0 0 1 1.647.63c.502.234.929.491 1.28.772l-4.031 5.818a2.695 2.695 0 0 0-1.104-.754 3.656 3.656 0 0 0-1.315-.263c-.397 0-.782.065-1.156.193a2.809 2.809 0 0 0-1 .596 3.233 3.233 0 0 0-.718.981c-.187.386-.28.836-.28 1.35 0 .514.093.963.28 1.349.187.385.427.7.719.946s.625.432.999.561c.374.128.76.193 1.156.193.468 0 .923-.088 1.367-.263a2.898 2.898 0 0 0 1.087-.719l4.065 5.678c-.77.608-1.77 1.122-2.996 1.542-1.227.42-2.518.631-3.873.631Zm23.533-6.554c0 1.239-.263 2.278-.789 3.12a6.214 6.214 0 0 1-1.997 2.015 8.661 8.661 0 0 1-2.647 1.086 12.12 12.12 0 0 1-2.733.333c-1.59 0-3.149-.228-4.68-.683-1.53-.456-2.856-1.104-3.977-1.945l3.96-4.592c.561.514 1.221.929 1.98 1.244.76.316 1.49.474 2.191.474.28 0 .543-.053.789-.158.245-.105.368-.298.368-.578 0-.304-.217-.544-.649-.719-.432-.175-1.186-.391-2.26-.648a10.46 10.46 0 0 1-1.788-.614 6.425 6.425 0 0 1-1.665-1.069 5.44 5.44 0 0 1-1.244-1.63c-.327-.642-.49-1.407-.49-2.295 0-1.192.262-2.208.788-3.05a6.568 6.568 0 0 1 1.998-2.05 8.839 8.839 0 0 1 2.628-1.156c.947-.245 1.84-.368 2.682-.368 1.425 0 2.838.21 4.24.63 1.402.422 2.664 1.006 3.786 1.753l-3.786 4.521a8.432 8.432 0 0 0-1.787-.876 5.444 5.444 0 0 0-1.788-.315c-.397 0-.724.052-.98.158-.258.105-.386.31-.386.613 0 .234.146.415.438.543.292.129.964.298 2.015.508.724.14 1.431.357 2.12.649.69.292 1.309.666 1.858 1.121a5.1 5.1 0 0 1 1.314 1.665c.327.654.49 1.425.49 2.313Z"
          />
          <path
            className="fill-purple-500 group-hover:fill-red-500"
            fill="currentColor"
            d="m71.494 37.575-6.313 3.548 1.443-7.066-5.345-4.873 7.205-.82 3.01-6.558 3.01 6.559 7.206.82-5.345 4.872 1.443 7.066-6.314-3.548Zm20.384-11.042-14.062-1.6-5.875-12.8-5.875 12.8-14.062 1.6 10.43 9.51-2.815 13.79L71.94 42.91l12.322 6.923-2.816-13.79 10.431-9.51Z"
          />
          <path
            className="fill-cyan-500 transition"
            fill="currentColor"
            d="m88.111 55.36-16.17-9.085-16.218 9.111 3.706-18.148L45.701 24.72l18.507-2.105.283-.617L48.93.02.125 68.952l42.674-42.281 10.69 9.532-44.73 28.089 46.57-23.057-3.325 15.078L.125 68.952h97.61L88.111 55.36"
          />
          <path
            className="fill-purple-500"
            fill="currentColor"
            d="M108.357 54.183a16.62 16.62 0 0 1-2.961-.263 16.021 16.021 0 0 1-2.804-.77 17.48 17.48 0 0 1-2.541-1.192 12.757 12.757 0 0 1-2.138-1.525l5.082-5.538c.584.631 1.36 1.192 2.33 1.683.97.49 1.969.736 2.997.736.467 0 .894-.082 1.28-.246.385-.163.578-.467.578-.91a.935.935 0 0 0-.193-.597c-.129-.163-.356-.333-.684-.508a10.996 10.996 0 0 0-1.349-.578c-.572-.21-1.29-.456-2.155-.736a18.434 18.434 0 0 1-2.419-.999 8.545 8.545 0 0 1-2.05-1.42 6.228 6.228 0 0 1-1.42-2.015c-.35-.782-.525-1.723-.525-2.821 0-1.542.315-2.85.946-3.925a8.271 8.271 0 0 1 2.436-2.646 9.981 9.981 0 0 1 3.347-1.49 15.404 15.404 0 0 1 3.68-.456c1.636 0 3.3.316 4.994.947a13.352 13.352 0 0 1 4.469 2.733l-5.187 5.293a5.425 5.425 0 0 0-2.068-1.595c-.818-.362-1.554-.543-2.208-.543-.607 0-1.098.087-1.472.263-.374.175-.56.461-.56.858 0 .374.192.654.578.841.385.187 1.01.42 1.875.701.888.28 1.822.608 2.804.982.98.374 1.886.858 2.716 1.454a7.636 7.636 0 0 1 2.05 2.19c.537.865.806 1.94.806 3.225 0 1.495-.298 2.798-.894 3.908a8.436 8.436 0 0 1-2.348 2.769 10.177 10.177 0 0 1-3.277 1.647 12.938 12.938 0 0 1-3.715.543Zm20.87-.21c-2.477 0-4.311-.532-5.503-1.595-1.192-1.063-1.787-2.716-1.787-4.96V40.83h-2.594v-5.783h2.559v-4.136h7.85v4.136h3.996v5.783h-3.996v4.907c0 .887.193 1.49.579 1.805.385.315.917.473 1.594.473a6.317 6.317 0 0 0 1.472-.21v5.537c-.42.187-1.01.339-1.77.456-.759.116-1.56.175-2.4.175Zm16.593-8.131c-1.191 0-2.15.128-2.874.385-.724.257-1.086.736-1.086 1.437 0 .257.058.473.175.649.117.175.269.32.456.438.187.117.391.204.613.263.222.058.426.087.613.087.771 0 1.39-.245 1.858-.736.467-.49.7-1.121.7-1.892v-.631h-.455Zm-.07-4.066c0-.56-.193-.975-.578-1.244-.386-.269-.894-.403-1.525-.403-.747 0-1.454.158-2.12.473a8.579 8.579 0 0 0-1.77 1.104l-4.03-3.995c1.12-1.075 2.453-1.905 3.995-2.489a13.349 13.349 0 0 1 4.766-.876c1.753 0 3.201.245 4.346.736 1.145.49 2.05 1.168 2.716 2.033.666.864 1.134 1.87 1.402 3.014.27 1.145.403 2.36.403 3.645v9.708h-7.325V52.01h-.07c-.467.701-1.133 1.203-1.997 1.507-.865.304-1.706.456-2.524.456a8.319 8.319 0 0 1-2.225-.316 6.105 6.105 0 0 1-2.068-1.016c-.62-.467-1.128-1.075-1.525-1.822-.397-.748-.596-1.671-.596-2.77 0-1.284.333-2.33 1-3.136.665-.806 1.512-1.437 2.54-1.893 1.028-.455 2.18-.765 3.452-.928a29.29 29.29 0 0 1 3.733-.246v-.07Zm10.951-6.729h7.78v2.103h.07c.398-.748.988-1.367 1.77-1.858.783-.49 1.7-.736 2.752-.736.63 0 1.145.059 1.542.176l-.63 6.869a5.64 5.64 0 0 0-.86-.158 7.837 7.837 0 0 0-.858-.052c-1.052 0-1.893.303-2.524.91-.63.608-.946 1.356-.946 2.244v8.937h-8.096V35.047Zm14.596 5.432h9.673v6.029h-9.673v-6.029Z"
          />
        </g>
      </svg>
    </Link>
  )
}
