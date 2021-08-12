_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"20a2":function(e,n,t){e.exports=t("nOHt")},"8i9l":function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var r=t("nKUr"),i=t("rePB"),a=t("g4pe"),u=t.n(a),c=t("20a2"),o=t("q1tI"),s=t("hIuh"),l=t.n(s);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){Object(i.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f="undefined"!==typeof GPUDevice&&t("7QzT").setShaderRegisteredCallback;t("+dQi");var m=function(e){var n=Object(o.useRef)(null),i=Object(o.useMemo)((function(){return e.sources.map((function(e){return p({name:e.name},function(e,n){var i,a={lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!n},u=null,c=[];u=document.createElement("div");var o=t("VrN/");return(i=o(u,a)).updatedSource=function(e){c.forEach((function(n){return n(e)}))},{updateCallbacks:c,Container:function(t){return Object(r.jsxs)("div",p(p({},t),{},{children:[n?Object(r.jsx)("button",{className:l.a.updateSourceBtn,onClick:function(){i.updatedSource(i.getValue())},children:"Update"}):null,Object(r.jsx)("div",{ref:function(n){u&&n&&(n.appendChild(u),i.setOption("value",e))}})]}))}}}(e.contents,e.editable))}))}),e.sources),a=Object(o.useRef)(null),s=Object(o.useMemo)((function(){if(e.gui)return new(t("iZKT").GUI)({autoPlace:!1})}),[]),d=Object(c.useRouter)().asPath.match(/#([a-zA-Z0-9\.\/]+)/),m=Object(o.useState)(null),g=m[0],b=m[1],h=Object(o.useState)(null),v=h[0],x=h[1];return Object(o.useEffect)((function(){x(d?d[1]:i[0].name),s&&a.current&&a.current.appendChild(s.domElement);try{var t=e.init({canvasRef:n,gui:s});t instanceof Promise&&t.catch((function(e){console.error(e),b(e)}))}catch(r){console.error(r),b(r)}}),[]),Object(o.useEffect)((function(){f&&f((function(n,t){var r=e.sources.findIndex((function(e){return e.contents==n}));i[r].updateCallbacks.push(t)}))}),[i]),Object(r.jsxs)("main",{children:[Object(r.jsxs)(u.a,{children:[Object(r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),Object(r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),Object(r.jsx)("meta",{name:"description",content:e.description})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:e.name}),Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/austinEng/webgpu-samples/tree/main/".concat(e.filename),children:"See it on Github!"}),Object(r.jsx)("p",{children:e.description}),g?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Is WebGPU Enabled?"}),Object(r.jsx)("p",{children:"".concat(g)})]}):null]}),Object(r.jsxs)("div",{className:l.a.canvasContainer,children:[Object(r.jsx)("div",{style:{position:"absolute",right:10},ref:a}),Object(r.jsx)("canvas",{ref:n,width:600,height:600})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("nav",{className:l.a.sourceFileNav,children:Object(r.jsx)("ul",{children:i.map((function(e,n){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#".concat(e.name),"data-active":v==e.name,onClick:function(){x(e.name)},children:e.name})},n)}))})}),i.map((function(e,n){return Object(r.jsx)(e.Container,{className:l.a.sourceFileContainer,"data-active":v==e.name},n)}))]})]})},g=function(e){return Object(r.jsx)(m,p({},e))}},B9fm:function(e,n,t){"use strict";n.a="[[group(0), binding(0)]] var mySampler : sampler;\n[[group(0), binding(1)]] var myTexture : texture_2d<f32>;\n\nstruct VertexOutput {\n  [[builtin(position)]] Position : vec4<f32>;\n  [[location(0)]] fragUV : vec2<f32>;\n};\n\n[[stage(vertex)]]\nfn vert_main([[builtin(vertex_index)]] VertexIndex : u32) -> VertexOutput {\n  var pos = array<vec2<f32>, 6>(\n      vec2<f32>( 1.0,  1.0),\n      vec2<f32>( 1.0, -1.0),\n      vec2<f32>(-1.0, -1.0),\n      vec2<f32>( 1.0,  1.0),\n      vec2<f32>(-1.0, -1.0),\n      vec2<f32>(-1.0,  1.0));\n\n  var uv = array<vec2<f32>, 6>(\n      vec2<f32>(1.0, 0.0),\n      vec2<f32>(1.0, 1.0),\n      vec2<f32>(0.0, 1.0),\n      vec2<f32>(1.0, 0.0),\n      vec2<f32>(0.0, 1.0),\n      vec2<f32>(0.0, 0.0));\n\n  var output : VertexOutput;\n  output.Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n  output.fragUV = uv[VertexIndex];\n  return output;\n}\n\n[[stage(fragment)]]\nfn frag_main([[location(0)]] fragUV : vec2<f32>) -> [[location(0)]] vec4<f32> {\n  return textureSample(myTexture, mySampler, fragUV);\n}\n"},NbQA:function(e,n,t){"use strict";t.r(n);var r=t("Umx1");n.default=r.a},Umx1:function(e,n,t){"use strict";(function(e,r){var i=t("o0o1"),a=t.n(i),u=t("HaE+"),c=t("8i9l"),o=t("opJj"),s=t("B9fm"),l=[4,4],d=function(){var e=Object(u.a)(a.a.mark((function e(n){var r,i,u,c,d,p,f,m,g,b,h,v,x,P,w,B,G,O,y,j,U,T,S,_,I,E,C,D,R,M;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M=function(){if(r.current){var e=c.createCommandEncoder(),n=e.beginComputePass();n.setPipeline(g),n.setBindGroup(0,T),n.setBindGroup(1,S),n.dispatch(Math.ceil(w/D),Math.ceil(B/l[1])),n.setBindGroup(1,_),n.dispatch(Math.ceil(B/D),Math.ceil(w/l[1]));for(var t=0;t<C.iterations-1;++t)n.setBindGroup(1,I),n.dispatch(Math.ceil(w/D),Math.ceil(B/l[1])),n.setBindGroup(1,_),n.dispatch(Math.ceil(B/D),Math.ceil(w/l[1]));n.endPass();var i=e.beginRenderPass({colorAttachments:[{view:d.getCurrentTexture().createView(),loadValue:{r:0,g:0,b:0,a:1},storeOp:"store"}]});i.setPipeline(b),i.setBindGroup(0,E),i.draw(6,1,0,0),i.endPass(),c.queue.submit([e.finish()]),requestAnimationFrame(M)}},r=n.canvasRef,i=n.gui,e.next=4,navigator.gpu.requestAdapter();case 4:return u=e.sent,e.next=7,u.requestDevice();case 7:if(c=e.sent,null!==r.current){e.next=10;break}return e.abrupt("return");case 10:return d=r.current.getContext("webgpu"),p=window.devicePixelRatio||1,f=[r.current.clientWidth*p,r.current.clientHeight*p],m=d.getPreferredFormat(u),d.configure({device:c,format:m,size:f}),g=c.createComputePipeline({compute:{module:c.createShaderModule({code:o.a}),entryPoint:"main"}}),b=c.createRenderPipeline({vertex:{module:c.createShaderModule({code:s.a}),entryPoint:"vert_main"},fragment:{module:c.createShaderModule({code:s.a}),entryPoint:"frag_main",targets:[{format:m}]},primitive:{topology:"triangle-list"}}),h=c.createSampler({magFilter:"linear",minFilter:"linear"}),(v=document.createElement("img")).src=t("neuz"),e.next=22,v.decode();case 22:return e.next=24,createImageBitmap(v);case 24:x=e.sent,P=[x.width,x.height],w=P[0],B=P[1],G=c.createTexture({size:[w,B,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),c.queue.copyExternalImageToTexture({source:x},{texture:G},[x.width,x.height]),O=[0,1].map((function(){return c.createTexture({size:{width:w,height:B},format:"rgba8unorm",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING})})),y=function(){var e=c.createBuffer({size:4,mappedAtCreation:!0,usage:GPUBufferUsage.UNIFORM});return new Uint32Array(e.getMappedRange())[0]=0,e.unmap(),e}(),j=function(){var e=c.createBuffer({size:4,mappedAtCreation:!0,usage:GPUBufferUsage.UNIFORM});return new Uint32Array(e.getMappedRange())[0]=1,e.unmap(),e}(),U=c.createBuffer({size:8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM}),T=c.createBindGroup({layout:g.getBindGroupLayout(0),entries:[{binding:0,resource:h},{binding:1,resource:{buffer:U}}]}),S=c.createBindGroup({layout:g.getBindGroupLayout(1),entries:[{binding:1,resource:G.createView()},{binding:2,resource:O[0].createView()},{binding:3,resource:{buffer:y}}]}),_=c.createBindGroup({layout:g.getBindGroupLayout(1),entries:[{binding:1,resource:O[0].createView()},{binding:2,resource:O[1].createView()},{binding:3,resource:{buffer:j}}]}),I=c.createBindGroup({layout:g.getBindGroupLayout(1),entries:[{binding:1,resource:O[1].createView()},{binding:2,resource:O[0].createView()},{binding:3,resource:{buffer:y}}]}),E=c.createBindGroup({layout:b.getBindGroupLayout(0),entries:[{binding:0,resource:h},{binding:1,resource:O[1].createView()}]}),C={filterSize:15,iterations:2},R=function(){D=128-(C.filterSize-1),c.queue.writeBuffer(U,0,new Uint32Array([C.filterSize,D]))},i.add(C,"filterSize",1,33).step(2).onChange(R),i.add(C,"iterations",1,10).step(1),R(),requestAnimationFrame(M);case 43:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.a=function(){return Object(c.a)({name:"Image Blur",description:"This example shows how to blur an image using a WebGPU compute shader.",gui:!0,init:d,sources:[{name:e.substr(r.length+1),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport blurWGSL from './blur.wgsl';\nimport fullscreenTexturedQuadWGSL from '../../shaders/fullscreenTexturedQuad.wgsl';\n\n// Contants from the blur.wgsl shader.\nconst tileDim = 128;\nconst batch = [4, 4];\n\nconst init: SampleInit = async ({ canvasRef, gui }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (canvasRef.current === null) return;\n  const context = canvasRef.current.getContext('webgpu');\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  const presentationSize = [\n    canvasRef.current.clientWidth * devicePixelRatio,\n    canvasRef.current.clientHeight * devicePixelRatio,\n  ];\n  const presentationFormat = context.getPreferredFormat(adapter);\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    size: presentationSize,\n  });\n\n  const blurPipeline = device.createComputePipeline({\n    compute: {\n      module: device.createShaderModule({\n        code: blurWGSL,\n      }),\n      entryPoint: 'main',\n    },\n  });\n\n  const fullscreenQuadPipeline = device.createRenderPipeline({\n    vertex: {\n      module: device.createShaderModule({\n        code: fullscreenTexturedQuadWGSL,\n      }),\n      entryPoint: 'vert_main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fullscreenTexturedQuadWGSL,\n      }),\n      entryPoint: 'frag_main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n  });\n\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  const img = document.createElement('img');\n  img.src = require('../../../assets/img/Di-3d.png');\n  await img.decode();\n  const imageBitmap = await createImageBitmap(img);\n\n  const [srcWidth, srcHeight] = [imageBitmap.width, imageBitmap.height];\n  const cubeTexture = device.createTexture({\n    size: [srcWidth, srcHeight, 1],\n    format: 'rgba8unorm',\n    usage:\n      GPUTextureUsage.TEXTURE_BINDING |\n      GPUTextureUsage.COPY_DST |\n      GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n  device.queue.copyExternalImageToTexture(\n    { source: imageBitmap },\n    { texture: cubeTexture },\n    [imageBitmap.width, imageBitmap.height]\n  );\n\n  const textures = [0, 1].map(() => {\n    return device.createTexture({\n      size: {\n        width: srcWidth,\n        height: srcHeight,\n      },\n      format: 'rgba8unorm',\n      usage:\n        GPUTextureUsage.COPY_DST |\n        GPUTextureUsage.STORAGE_BINDING |\n        GPUTextureUsage.TEXTURE_BINDING,\n    });\n  });\n\n  const buffer0 = (() => {\n    const buffer = device.createBuffer({\n      size: 4,\n      mappedAtCreation: true,\n      usage: GPUBufferUsage.UNIFORM,\n    });\n    new Uint32Array(buffer.getMappedRange())[0] = 0;\n    buffer.unmap();\n    return buffer;\n  })();\n\n  const buffer1 = (() => {\n    const buffer = device.createBuffer({\n      size: 4,\n      mappedAtCreation: true,\n      usage: GPUBufferUsage.UNIFORM,\n    });\n    new Uint32Array(buffer.getMappedRange())[0] = 1;\n    buffer.unmap();\n    return buffer;\n  })();\n\n  const blurParamsBuffer = device.createBuffer({\n    size: 8,\n    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,\n  });\n\n  const computeConstants = device.createBindGroup({\n    layout: blurPipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: sampler,\n      },\n      {\n        binding: 1,\n        resource: {\n          buffer: blurParamsBuffer,\n        },\n      },\n    ],\n  });\n\n  const computeBindGroup0 = device.createBindGroup({\n    layout: blurPipeline.getBindGroupLayout(1),\n    entries: [\n      {\n        binding: 1,\n        resource: cubeTexture.createView(),\n      },\n      {\n        binding: 2,\n        resource: textures[0].createView(),\n      },\n      {\n        binding: 3,\n        resource: {\n          buffer: buffer0,\n        },\n      },\n    ],\n  });\n\n  const computeBindGroup1 = device.createBindGroup({\n    layout: blurPipeline.getBindGroupLayout(1),\n    entries: [\n      {\n        binding: 1,\n        resource: textures[0].createView(),\n      },\n      {\n        binding: 2,\n        resource: textures[1].createView(),\n      },\n      {\n        binding: 3,\n        resource: {\n          buffer: buffer1,\n        },\n      },\n    ],\n  });\n\n  const computeBindGroup2 = device.createBindGroup({\n    layout: blurPipeline.getBindGroupLayout(1),\n    entries: [\n      {\n        binding: 1,\n        resource: textures[1].createView(),\n      },\n      {\n        binding: 2,\n        resource: textures[0].createView(),\n      },\n      {\n        binding: 3,\n        resource: {\n          buffer: buffer0,\n        },\n      },\n    ],\n  });\n\n  const showResultBindGroup = device.createBindGroup({\n    layout: fullscreenQuadPipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: sampler,\n      },\n      {\n        binding: 1,\n        resource: textures[1].createView(),\n      },\n    ],\n  });\n\n  const settings = {\n    filterSize: 15,\n    iterations: 2,\n  };\n\n  let blockDim: number;\n  const updateSettings = () => {\n    blockDim = tileDim - (settings.filterSize - 1);\n    device.queue.writeBuffer(\n      blurParamsBuffer,\n      0,\n      new Uint32Array([settings.filterSize, blockDim])\n    );\n  };\n  gui.add(settings, 'filterSize', 1, 33).step(2).onChange(updateSettings);\n  gui.add(settings, 'iterations', 1, 10).step(1);\n\n  updateSettings();\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!canvasRef.current) return;\n\n    const commandEncoder = device.createCommandEncoder();\n\n    const computePass = commandEncoder.beginComputePass();\n    computePass.setPipeline(blurPipeline);\n    computePass.setBindGroup(0, computeConstants);\n\n    computePass.setBindGroup(1, computeBindGroup0);\n    computePass.dispatch(\n      Math.ceil(srcWidth / blockDim),\n      Math.ceil(srcHeight / batch[1])\n    );\n\n    computePass.setBindGroup(1, computeBindGroup1);\n    computePass.dispatch(\n      Math.ceil(srcHeight / blockDim),\n      Math.ceil(srcWidth / batch[1])\n    );\n\n    for (let i = 0; i < settings.iterations - 1; ++i) {\n      computePass.setBindGroup(1, computeBindGroup2);\n      computePass.dispatch(\n        Math.ceil(srcWidth / blockDim),\n        Math.ceil(srcHeight / batch[1])\n      );\n\n      computePass.setBindGroup(1, computeBindGroup1);\n      computePass.dispatch(\n        Math.ceil(srcHeight / blockDim),\n        Math.ceil(srcWidth / batch[1])\n      );\n    }\n\n    computePass.endPass();\n\n    const passEncoder = commandEncoder.beginRenderPass({\n      colorAttachments: [\n        {\n          view: context.getCurrentTexture().createView(),\n          loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n          storeOp: 'store',\n        },\n      ],\n    });\n\n    passEncoder.setPipeline(fullscreenQuadPipeline);\n    passEncoder.setBindGroup(0, showResultBindGroup);\n    passEncoder.draw(6, 1, 0, 0);\n    passEncoder.endPass();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst ImageBlur: () => JSX.Element = () =>\n  makeSample({\n    name: 'Image Blur',\n    description:\n      'This example shows how to blur an image using a WebGPU compute shader.',\n    gui: true,\n    init,\n    sources: [\n      {\n        name: __filename.substr(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: './blur.wgsl',\n        contents: blurWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/fullscreenTexturedQuad.wgsl',\n        contents: fullscreenTexturedQuadWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default ImageBlur;\n"},{name:"./blur.wgsl",contents:o.a,editable:!0},{name:"../../shaders/fullscreenTexturedQuad.wgsl",contents:s.a,editable:!0}],filename:e})}}).call(this,"src/sample/imageBlur/main.ts","src/sample/imageBlur")},hIuh:function(e,n,t){e.exports={canvasContainer:"SampleLayout_canvasContainer__1qkqt",sourceFileNav:"SampleLayout_sourceFileNav__2aMxK",sourceFileContainer:"SampleLayout_sourceFileContainer__3iiDM",updateSourceBtn:"SampleLayout_updateSourceBtn__3lOwr"}},neuz:function(e,n){e.exports="/webgpu-samples/_next/static/e04932ba9c013b60ddb249577c386914.png"},opJj:function(e,n,t){"use strict";n.a="[[block]] struct Params {\n  filterDim : u32;\n  blockDim : u32;\n};\n\n[[group(0), binding(0)]] var samp : sampler;\n[[group(0), binding(1)]] var<uniform> params : Params;\n[[group(1), binding(1)]] var inputTex : texture_2d<f32>;\n[[group(1), binding(2)]] var outputTex : texture_storage_2d<rgba8unorm, write>;\n\n[[block]] struct Flip {\n  value : u32;\n};\n[[group(1), binding(3)]] var<uniform> flip : Flip;\n\n// This shader blurs the input texture in one direction, depending on whether\n// |flip.value| is 0 or 1.\n// It does so by running (128 / 4) threads per workgroup to load 128\n// texels into 4 rows of shared memory. Each thread loads a\n// 4 x 4 block of texels to take advantage of the texture sampling\n// hardware.\n// Then, each thread computes the blur result by averaging the adjacent texel values\n// in shared memory.\n// Because we're operating on a subset of the texture, we cannot compute all of the\n// results since not all of the neighbors are available in shared memory.\n// Specifically, with 128 x 128 tiles, we can only compute and write out\n// square blocks of size 128 - (filterSize - 1). We compute the number of blocks\n// needed in Javascript and dispatch that amount.\n\nvar<workgroup> tile : array<array<vec3<f32>, 128>, 4>;\n\n[[stage(compute), workgroup_size(32, 1, 1)]]\nfn main(\n  [[builtin(workgroup_id)]] WorkGroupID : vec3<u32>,\n  [[builtin(local_invocation_id)]] LocalInvocationID : vec3<u32>\n) {\n  let filterOffset : u32 = (params.filterDim - 1u) / 2u;\n  let dims : vec2<i32> = textureDimensions(inputTex, 0);\n\n  let baseIndex = vec2<i32>(\n    WorkGroupID.xy * vec2<u32>(params.blockDim, 4u) +\n    LocalInvocationID.xy * vec2<u32>(4u, 1u)\n  ) - vec2<i32>(i32(filterOffset), 0);\n\n  for (var r : u32 = 0u; r < 4u; r = r + 1u) {\n    for (var c : u32 = 0u; c < 4u; c = c + 1u) {\n      var loadIndex = baseIndex + vec2<i32>(i32(c), i32(r));\n      if (flip.value != 0u) {\n        loadIndex = loadIndex.yx;\n      }\n\n      tile[r][4u * LocalInvocationID.x + c] =\n        textureSampleLevel(inputTex, samp,\n          (vec2<f32>(loadIndex) + vec2<f32>(0.25, 0.25)) / vec2<f32>(dims), 0.0).rgb;\n    }\n  }\n\n  workgroupBarrier();\n\n  for (var r : u32 = 0u; r < 4u; r = r + 1u) {\n    for (var c : u32 = 0u; c < 4u; c = c + 1u) {\n      var writeIndex = baseIndex + vec2<i32>(i32(c), i32(r));\n      if (flip.value != 0u) {\n        writeIndex = writeIndex.yx;\n      }\n\n      let center : u32 = 4u * LocalInvocationID.x + c;\n      if (center >= filterOffset &&\n          center < 128u - filterOffset &&\n          all(writeIndex < dims)) {\n        var acc : vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);\n        for (var f : u32 = 0u; f < params.filterDim; f = f + 1u) {\n          var i : u32 = center + f - filterOffset;\n          acc = acc + (1.0 / f32(params.filterDim)) * tile[r][i];\n        }\n        textureStore(outputTex, writeIndex, vec4<f32>(acc, 1.0));\n      }\n    }\n  }\n}\n"},tGaW:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/imageBlur",function(){return t("NbQA")}])}},[["tGaW",0,1,4,2,3,5]]]);