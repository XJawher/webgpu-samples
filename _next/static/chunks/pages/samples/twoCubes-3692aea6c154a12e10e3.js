_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"1uVF":function(e,n,t){"use strict";t.d(n,"e",(function(){return r})),t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return o})),t.d(n,"d",(function(){return i})),t.d(n,"c",(function(){return s}));var r=40,a=0,o=32,i=36,s=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0])},"20a2":function(e,n,t){e.exports=t("nOHt")},"8N3a":function(e,n,t){"use strict";n.a="[[block]] struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>;\n};\n[[binding(0), group(0)]] var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  [[builtin(position)]] Position : vec4<f32>;\n  [[location(0)]] fragUV : vec2<f32>;\n  [[location(1)]] fragPosition: vec4<f32>;\n};\n\n[[stage(vertex)]]\nfn main([[location(0)]] position : vec4<f32>,\n        [[location(1)]] uv : vec2<f32>) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = uniforms.modelViewProjectionMatrix * position;\n  output.fragUV = uv;\n  output.fragPosition = 0.5 * (position + vec4<f32>(1.0, 1.0, 1.0, 1.0));\n  return output;\n}\n"},"8i9l":function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t("nKUr"),a=t("rePB"),o=t("g4pe"),i=t.n(o),s=t("20a2"),c=t("q1tI"),u=t("hIuh"),f=t.n(u);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m="undefined"!==typeof GPUDevice&&t("7QzT").setShaderRegisteredCallback;t("+dQi");var p=function(e){var n=Object(c.useRef)(null),a=Object(c.useMemo)((function(){return e.sources.map((function(e){return d({name:e.name},function(e,n){var a,o={lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!n},i=null,s=[];i=document.createElement("div");var c=t("VrN/");return(a=c(i,o)).updatedSource=function(e){s.forEach((function(n){return n(e)}))},{updateCallbacks:s,Container:function(t){return Object(r.jsxs)("div",d(d({},t),{},{children:[n?Object(r.jsx)("button",{className:f.a.updateSourceBtn,onClick:function(){a.updatedSource(a.getValue())},children:"Update"}):null,Object(r.jsx)("div",{ref:function(n){i&&n&&(n.appendChild(i),a.setOption("value",e))}})]}))}}}(e.contents,e.editable))}))}),e.sources),o=Object(c.useRef)(null),u=Object(c.useMemo)((function(){if(e.gui)return new(t("iZKT").GUI)({autoPlace:!1})}),[]),l=Object(s.useRouter)().asPath.match(/#([a-zA-Z0-9\.\/]+)/),p=Object(c.useState)(null),b=p[0],h=p[1],v=Object(c.useState)(null),x=v[0],g=v[1];return Object(c.useEffect)((function(){g(l?l[1]:a[0].name),u&&o.current&&o.current.appendChild(u.domElement);try{var t=e.init({canvasRef:n,gui:u});t instanceof Promise&&t.catch((function(e){console.error(e),h(e)}))}catch(r){console.error(r),h(r)}}),[]),Object(c.useEffect)((function(){m&&m((function(n,t){var r=e.sources.findIndex((function(e){return e.contents==n}));a[r].updateCallbacks.push(t)}))}),[a]),Object(r.jsxs)("main",{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),Object(r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),Object(r.jsx)("meta",{name:"description",content:e.description})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:e.name}),Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/austinEng/webgpu-samples/tree/main/".concat(e.filename),children:"See it on Github!"}),Object(r.jsx)("p",{children:e.description}),b?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Is WebGPU Enabled?"}),Object(r.jsx)("p",{children:"".concat(b)})]}):null]}),Object(r.jsxs)("div",{className:f.a.canvasContainer,children:[Object(r.jsx)("div",{style:{position:"absolute",right:10},ref:o}),Object(r.jsx)("canvas",{ref:n,width:600,height:600})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("nav",{className:f.a.sourceFileNav,children:Object(r.jsx)("ul",{children:a.map((function(e,n){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#".concat(e.name),"data-active":x==e.name,onClick:function(){g(e.name)},children:e.name})},n)}))})}),a.map((function(e,n){return Object(r.jsx)(e.Container,{className:f.a.sourceFileContainer,"data-active":x==e.name},n)}))]})]})},b=function(e){return Object(r.jsx)(p,d({},e))}},MYnn:function(e,n,t){"use strict";t.r(n),n.default="export const cubeVertexSize = 4 * 10; // Byte size of one cube vertex.\nexport const cubePositionOffset = 0;\nexport const cubeColorOffset = 4 * 4; // Byte offset of cube vertex color attribute.\nexport const cubeUVOffset = 4 * 8;\nexport const cubeVertexCount = 36;\n\n// prettier-ignore\nexport const cubeVertexArray = new Float32Array([\n  // float4 position, float4 color, float2 uv,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n]);\n"},ZPo7:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/twoCubes",function(){return t("lYvK")}])},eGeH:function(e,n,t){"use strict";(function(e,r){var a=t("o0o1"),o=t.n(a),i=t("HaE+"),s=t("IOcx"),c=t("8i9l"),u=t("1uVF"),f=t("8N3a"),l=t("urFr"),d=function(){var e=Object(i.a)(o.a.mark((function e(n){var t,r,a,i,c,d,m,p,b,h,v,x,g,w,j,O,P,y,M,V,C,S,B,E,_,G;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G=function(){if(t.current){_(),a.queue.writeBuffer(x,0,V.buffer,V.byteOffset,V.byteLength),a.queue.writeBuffer(x,h,C.buffer,C.byteOffset,C.byteLength),j.colorAttachments[0].view=d.getCurrentTexture().createView();var e=a.createCommandEncoder(),n=e.beginRenderPass(j);n.setPipeline(p),n.setVertexBuffer(0,m),n.setBindGroup(0,g),n.draw(u.d,1,0,0),n.setBindGroup(0,w),n.draw(u.d,1,0,0),n.endPass(),a.queue.submit([e.finish()]),requestAnimationFrame(G)}},_=function(){var e=Date.now()/1e3;s.a.rotate(B,y,1,s.b.fromValues(Math.sin(e),Math.cos(e),0)),s.a.rotate(E,M,1,s.b.fromValues(Math.cos(e),Math.sin(e),0)),s.a.multiply(V,S,B),s.a.multiply(V,P,V),s.a.multiply(C,S,E),s.a.multiply(C,P,C)},t=n.canvasRef,e.next=5,navigator.gpu.requestAdapter();case 5:return r=e.sent,e.next=8,r.requestDevice();case 8:if(a=e.sent,null!==t.current){e.next=11;break}return e.abrupt("return");case 11:i=t.current.getContext("gpupresent"),c="bgra8unorm",d=i.configureSwapChain({device:a,format:c}),m=a.createBuffer({size:u.c.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(m.getMappedRange()).set(u.c),m.unmap(),p=a.createRenderPipeline({vertex:{module:a.createShaderModule({code:f.a}),entryPoint:"main",buffers:[{arrayStride:u.e,attributes:[{shaderLocation:0,offset:u.a,format:"float32x4"},{shaderLocation:1,offset:u.b,format:"float32x2"}]}]},fragment:{module:a.createShaderModule({code:l.a}),entryPoint:"main",targets:[{format:c}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),b=a.createTexture({size:{width:t.current.width,height:t.current.width},format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),64,v=(h=256)+64,x=a.createBuffer({size:v,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),g=a.createBindGroup({layout:p.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:x,offset:0,size:64}}]}),w=a.createBindGroup({layout:p.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:x,offset:h,size:64}}]}),j={colorAttachments:[{view:void 0,loadValue:{r:.5,g:.5,b:.5,a:1},storeOp:"store"}],depthStencilAttachment:{view:b.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},O=Math.abs(t.current.width/t.current.height),P=s.a.create(),s.a.perspective(P,2*Math.PI/5,O,1,100),y=s.a.create(),s.a.translate(y,y,s.b.fromValues(-2,0,0)),M=s.a.create(),s.a.translate(M,M,s.b.fromValues(2,0,0)),V=s.a.create(),C=s.a.create(),S=s.a.create(),s.a.translate(S,S,s.b.fromValues(0,0,-7)),B=s.a.create(),E=s.a.create(),requestAnimationFrame(G);case 40:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.a=function(){return Object(c.a)({name:"Two Cubes",description:"This example shows some of the alignment requirements        involved when updating and binding multiple slices of a        uniform buffer. It renders two rotating cubes which have transform        matrices at different offsets in a uniform buffer.",init:d,sources:[{name:e.substr(r.length+1),contents:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\n\nimport basicVertWGSL from '../../shaders/basic.vert.wgsl';\nimport vertexPositionColorWGSL from '../../shaders/vertexPositionColor.frag.wgsl';\n\nconst init: SampleInit = async ({ canvasRef }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (canvasRef.current === null) return;\n  const context = canvasRef.current.getContext('gpupresent');\n\n  const swapChainFormat = 'bgra8unorm';\n\n  const swapChain = context.configureSwapChain({\n    device,\n    format: swapChainFormat,\n  });\n\n  // Create a vertex buffer from the cube data.\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    vertex: {\n      module: device.createShaderModule({\n        code: basicVertWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: vertexPositionColorWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: swapChainFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n\n      // Backface culling since the cube is solid piece of geometry.\n      // Faces pointing away from the camera will be occluded by faces\n      // pointing toward the camera.\n      cullMode: 'back',\n    },\n\n    // Enable depth testing so that the fragment closest to the camera\n    // is rendered in front.\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: { width: canvasRef.current.width, height: canvasRef.current.width },\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const matrixSize = 4 * 16; // 4x4 matrix\n  const offset = 256; // uniformBindGroup offset must be 256-byte aligned\n  const uniformBufferSize = offset + matrixSize;\n\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroup1 = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n          offset: 0,\n          size: matrixSize,\n        },\n      },\n    ],\n  });\n\n  const uniformBindGroup2 = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n          offset: offset,\n          size: matrixSize,\n        },\n      },\n    ],\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n\n        loadValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  const aspect = Math.abs(canvasRef.current.width / canvasRef.current.height);\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);\n\n  const modelMatrix1 = mat4.create();\n  mat4.translate(modelMatrix1, modelMatrix1, vec3.fromValues(-2, 0, 0));\n  const modelMatrix2 = mat4.create();\n  mat4.translate(modelMatrix2, modelMatrix2, vec3.fromValues(2, 0, 0));\n  const modelViewProjectionMatrix1 = mat4.create() as Float32Array;\n  const modelViewProjectionMatrix2 = mat4.create() as Float32Array;\n  const viewMatrix = mat4.create();\n  mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -7));\n\n  const tmpMat41 = mat4.create();\n  const tmpMat42 = mat4.create();\n\n  function updateTransformationMatrix() {\n    const now = Date.now() / 1000;\n\n    mat4.rotate(\n      tmpMat41,\n      modelMatrix1,\n      1,\n      vec3.fromValues(Math.sin(now), Math.cos(now), 0)\n    );\n    mat4.rotate(\n      tmpMat42,\n      modelMatrix2,\n      1,\n      vec3.fromValues(Math.cos(now), Math.sin(now), 0)\n    );\n\n    mat4.multiply(modelViewProjectionMatrix1, viewMatrix, tmpMat41);\n    mat4.multiply(\n      modelViewProjectionMatrix1,\n      projectionMatrix,\n      modelViewProjectionMatrix1\n    );\n    mat4.multiply(modelViewProjectionMatrix2, viewMatrix, tmpMat42);\n    mat4.multiply(\n      modelViewProjectionMatrix2,\n      projectionMatrix,\n      modelViewProjectionMatrix2\n    );\n  }\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!canvasRef.current) return;\n\n    updateTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      modelViewProjectionMatrix1.buffer,\n      modelViewProjectionMatrix1.byteOffset,\n      modelViewProjectionMatrix1.byteLength\n    );\n    device.queue.writeBuffer(\n      uniformBuffer,\n      offset,\n      modelViewProjectionMatrix2.buffer,\n      modelViewProjectionMatrix2.byteOffset,\n      modelViewProjectionMatrix2.byteLength\n    );\n\n    renderPassDescriptor.colorAttachments[0].view = swapChain\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n\n    // Bind the bind group (with the transformation matrix) for\n    // each cube, and draw.\n    passEncoder.setBindGroup(0, uniformBindGroup1);\n    passEncoder.draw(cubeVertexCount, 1, 0, 0);\n\n    passEncoder.setBindGroup(0, uniformBindGroup2);\n    passEncoder.draw(cubeVertexCount, 1, 0, 0);\n\n    passEncoder.endPass();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst TwoCubes: () => JSX.Element = () =>\n  makeSample({\n    name: 'Two Cubes',\n    description:\n      'This example shows some of the alignment requirements \\\n       involved when updating and binding multiple slices of a \\\n       uniform buffer. It renders two rotating cubes which have transform \\\n       matrices at different offsets in a uniform buffer.',\n    init,\n    sources: [\n      {\n        name: __filename.substr(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/basic.vert.wgsl',\n        contents: basicVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/vertexPositionColor.frag.wgsl',\n        contents: vertexPositionColorWGSL,\n        editable: true,\n      },\n      {\n        name: '../../meshes/cube.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/cube.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default TwoCubes;\n"},{name:"../../shaders/basic.vert.wgsl",contents:f.a,editable:!0},{name:"../../shaders/vertexPositionColor.frag.wgsl",contents:l.a,editable:!0},{name:"../../meshes/cube.ts",contents:t("MYnn").default}],filename:e})}}).call(this,"src/sample/twoCubes/main.ts","src/sample/twoCubes")},hIuh:function(e,n,t){e.exports={canvasContainer:"SampleLayout_canvasContainer__1qkqt",sourceFileNav:"SampleLayout_sourceFileNav__2aMxK",sourceFileContainer:"SampleLayout_sourceFileContainer__3iiDM",updateSourceBtn:"SampleLayout_updateSourceBtn__3lOwr"}},lYvK:function(e,n,t){"use strict";t.r(n);var r=t("eGeH");n.default=r.a},urFr:function(e,n,t){"use strict";n.a="[[stage(fragment)]]\nfn main([[location(0)]] fragUV: vec2<f32>,\n        [[location(1)]] fragPosition: vec4<f32>) -> [[location(0)]] vec4<f32> {\n  return fragPosition;\n}\n"}},[["ZPo7",0,1,4,2,3,5,6]]]);