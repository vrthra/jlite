var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="traits-tests.data";var REMOTE_PACKAGE_BASE="traits-tests.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","traits",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","adaptation",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/adaptation","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","etsconfig",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/etsconfig","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","examples",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/examples","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","observation",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/observation","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","testing",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/testing","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/tests","test-data",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/tests/test-data","historical-pickles",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","util",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/util","tests",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:428999,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1016,1726,3109,4227,5306,6144,7323,8069,8651,9429,10294,11238,12016,12926,14003,15185,16359,17107,18463,19348,20341,20953,21924,23166,24446,25241,25945,26899,27672,28863,30013,30956,31485,32076,32748,33222,33920,34646,35372,35989,36560,37441,38649,39425,40320,41361,42242,43200,44352,45579,46449,47316,47991,49102,50309,51195,52068,52961,53677,54877,55664,56840,57569,58524,59451,60180,61235,62284,63157,64155,65312,66166,66909,67711,68456,69285,70254,71106,72030,73258,74168,75164,75885,76357,76828,77563,78332,79365,80388,81175,82364,83079,83837,84673,85741,86592,87401,88450,89662,90452,90989,91971,92724,93842,95061,96179,97145,98084,98771,99608,100605,101840,102873,103957,104709,105564,106583,107337,108278,109352,110843,112053,113143,114242,115409,116633,117648,118504,119576,120288,121379,122704,123816,124646,125666,126277,127262,128612,129477,130260,131485,132060,133189,134230,135448,136429,137384,138570,139707,140791,141754,142785,144122,145059,145920,147070,148162,149165,15e4,151129,151766,152683,153354,154449,155261,156432,157413,158019,158722,159785,161129,162030,162724,164020,164782,166131,167024,168289,168936,169790,170414,171243,172604,173592,174735,175442,176411,177114,178034,178755,179589,180825,182156,182939,183655,184503,185606,186481,187158,187976,189100,190447,191516,192176,193389,194076,194859,195495,196723,197392,197960,198619,199217,200036,200759,201606,202415,203239,204136,205013,205717,206414,207200,207888,208673,209773,210899,211697,212550,214039,215073,215807,216491,217380,218486,219702,220921,221745,222558,223287,224167,224953,225984,226896,227831,228749,229581,230661,231625,232984,234335,235396,236454,237513,238672,239602,240244,240823,241938,242642,243362,244049,244767,245705,246892,247859,248688,249598,250183,250895,251950,252869,253902,254774,255608,256323,257339,258028,258600,259223,260408,261262,262469,263738,264923,265653,266194,266859,268087,269329,270420,271329,272362,273319,274120,275050,275813,276740,277948,278975,280195,280902,281638,282799,283594,284649,285721,286500,287068,287964,289088,290151,290926,291633,292685,293445,294251,295329,296697,297816,298769,299986,301202,302363,303448,304583,305468,306129,307267,307695,308829,309642,310830,311607,312545,313778,315047,315821,317083,318226,319174,320477,321648,322536,323456,324436,325028,325713,327027,328157,329406,330589,331753,332366,333132,333921,334732,335577,336329,337467,338514,339764,340449,341263,342585,343390,344140,344755,345387,345931,346601,347636,348186,348902,349655,350319,350903,351577,352250,352752,353664,354738,355803,357022,357698,358272,359071,359588,360327,361327,362161,363026,363899,364716,365554,366506,367552,368802,369939,370771,372033,372984,373746,374552,375520,376821,377649,378853,379533,380300,381247,382205,382996,383839,384420,385147,386362,387302,387886,388744,389356,389928,390647,391549,392872,394068,395548,396522,397676,398715,399523,400452,401663,402761,404010,404874,405970,407359,408301,409446,410727,411753,412808,413770,414928,416049,417099,418353,419678,420567,421706,423043,424268,425240,426521,427756,428486],sizes:[1016,710,1383,1118,1079,838,1179,746,582,778,865,944,778,910,1077,1182,1174,748,1356,885,993,612,971,1242,1280,795,704,954,773,1191,1150,943,529,591,672,474,698,726,726,617,571,881,1208,776,895,1041,881,958,1152,1227,870,867,675,1111,1207,886,873,893,716,1200,787,1176,729,955,927,729,1055,1049,873,998,1157,854,743,802,745,829,969,852,924,1228,910,996,721,472,471,735,769,1033,1023,787,1189,715,758,836,1068,851,809,1049,1212,790,537,982,753,1118,1219,1118,966,939,687,837,997,1235,1033,1084,752,855,1019,754,941,1074,1491,1210,1090,1099,1167,1224,1015,856,1072,712,1091,1325,1112,830,1020,611,985,1350,865,783,1225,575,1129,1041,1218,981,955,1186,1137,1084,963,1031,1337,937,861,1150,1092,1003,835,1129,637,917,671,1095,812,1171,981,606,703,1063,1344,901,694,1296,762,1349,893,1265,647,854,624,829,1361,988,1143,707,969,703,920,721,834,1236,1331,783,716,848,1103,875,677,818,1124,1347,1069,660,1213,687,783,636,1228,669,568,659,598,819,723,847,809,824,897,877,704,697,786,688,785,1100,1126,798,853,1489,1034,734,684,889,1106,1216,1219,824,813,729,880,786,1031,912,935,918,832,1080,964,1359,1351,1061,1058,1059,1159,930,642,579,1115,704,720,687,718,938,1187,967,829,910,585,712,1055,919,1033,872,834,715,1016,689,572,623,1185,854,1207,1269,1185,730,541,665,1228,1242,1091,909,1033,957,801,930,763,927,1208,1027,1220,707,736,1161,795,1055,1072,779,568,896,1124,1063,775,707,1052,760,806,1078,1368,1119,953,1217,1216,1161,1085,1135,885,661,1138,428,1134,813,1188,777,938,1233,1269,774,1262,1143,948,1303,1171,888,920,980,592,685,1314,1130,1249,1183,1164,613,766,789,811,845,752,1138,1047,1250,685,814,1322,805,750,615,632,544,670,1035,550,716,753,664,584,674,673,502,912,1074,1065,1219,676,574,799,517,739,1e3,834,865,873,817,838,952,1046,1250,1137,832,1262,951,762,806,968,1301,828,1204,680,767,947,958,791,843,581,727,1215,940,584,858,612,572,719,902,1323,1196,1480,974,1154,1039,808,929,1211,1098,1249,864,1096,1389,942,1145,1281,1026,1055,962,1158,1121,1050,1254,1325,889,1139,1337,1225,972,1281,1235,730,513],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_traits-tests.data")}Module["addRunDependency"]("datafile_traits-tests.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/__init__.py",start:0,end:0,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/abc_examples.py",start:0,end:4110,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/benchmark.py",start:4110,end:8460,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/interface_examples.py",start:8460,end:12082,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/lazy_examples.py",start:12082,end:12704,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/test_adaptation_manager.py",start:12704,end:28893,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/test_adaptation_offer.py",start:28893,end:31112,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/test_adapter.py",start:31112,end:32846,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/test_global_adaptation_manager.py",start:32846,end:37097,audio:0},{filename:"/lib/python3.9/site-packages/traits/etsconfig/tests/__init__.py",start:37097,end:37097,audio:0},{filename:"/lib/python3.9/site-packages/traits/etsconfig/tests/test_etsconfig.py",start:37097,end:47682,audio:0},{filename:"/lib/python3.9/site-packages/traits/examples/tests/__init__.py",start:47682,end:47682,audio:0},{filename:"/lib/python3.9/site-packages/traits/examples/tests/test_etsdemo_info.py",start:47682,end:48506,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/__init__.py",start:48506,end:48506,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_dict_change_event.py",start:48506,end:50295,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_dict_item_observer.py",start:50295,end:59624,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_exception_handling.py",start:59624,end:62284,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_expression.py",start:62284,end:87101,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_filtered_trait_observer.py",start:87101,end:98197,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_generated_parser.py",start:98197,end:100321,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_has_traits_helpers.py",start:100321,end:109684,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_list_change_event.py",start:109684,end:111411,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_list_item_observer.py",start:111411,end:122176,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_metadata_filter.py",start:122176,end:126242,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_named_trait_observer.py",start:126242,end:144744,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_observe.py",start:144744,end:162552,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_observer_change_notifier.py",start:162552,end:181999,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_observer_graph.py",start:181999,end:185311,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_parsing.py",start:185311,end:192341,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_set_change_event.py",start:192341,end:194093,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_set_item_observer.py",start:194093,end:201500,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_trait_added_observer.py",start:201500,end:210947,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_trait_change_event.py",start:210947,end:212724,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_trait_event_notifier.py",start:212724,end:228613,audio:0},{filename:"/lib/python3.9/site-packages/traits/testing/tests/__init__.py",start:228613,end:228613,audio:0},{filename:"/lib/python3.9/site-packages/traits/testing/tests/test_nose_tools.py",start:228613,end:229827,audio:0},{filename:"/lib/python3.9/site-packages/traits/testing/tests/test_optional_dependencies.py",start:229827,end:230625,audio:0},{filename:"/lib/python3.9/site-packages/traits/testing/tests/test_unittest_tools.py",start:230625,end:245323,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/__init__.py",start:245323,end:245788,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/check_observe_timing.py",start:245788,end:263455,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/check_timing.py",start:263455,end:269118,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_abc.py",start:269118,end:271829,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_any.py",start:271829,end:274581,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_anytrait_static_notifiers.py",start:274581,end:279884,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_array.py",start:279884,end:281645,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_array_or_none.py",start:281645,end:287723,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_automatic_adaptation.py",start:287723,end:292152,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_bool.py",start:292152,end:294643,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_callable.py",start:294643,end:301372,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_class_traits.py",start:301372,end:303005,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_clone.py",start:303005,end:311552,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_configure_traits.py",start:311552,end:317603,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_constant.py",start:317603,end:320068,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_constants.py",start:320068,end:320990,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_container_events.py",start:320990,end:325633,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_copy_traits.py",start:325633,end:334722,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_copyable_trait_names.py",start:334722,end:338183,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_ctraits.py",start:338183,end:349604,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_cythonized_traits.py",start:349604,end:354554,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_date.py",start:354554,end:359872,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_datetime.py",start:359872,end:363655,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_delegate.py",start:363655,end:372371,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_deprecated_handlers.py",start:372371,end:373694,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_dict.py",start:373694,end:378447,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_directory.py",start:378447,end:382570,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_dynamic_notifiers.py",start:382570,end:392744,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_dynamic_trait_definition.py",start:392744,end:394243,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_editor_factories.py",start:394243,end:401275,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_enum.py",start:401275,end:411751,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_event_order.py",start:411751,end:414302,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_expression.py",start:414302,end:418705,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_extended_notifiers.py",start:418705,end:426312,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_extended_trait_change.py",start:426312,end:461168,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_file.py",start:461168,end:464219,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_float.py",start:464219,end:469326,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_float_range.py",start:469326,end:478725,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_get_traits.py",start:478725,end:481830,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_has_required_traits.py",start:481830,end:483297,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_has_traits.py",start:483297,end:510725,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_historical_unpickling.py",start:510725,end:512688,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_instance.py",start:512688,end:515093,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_int_range_long.py",start:515093,end:516139,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_integer.py",start:516139,end:519555,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_integer_range.py",start:519555,end:528951,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_interface_checker.py",start:528951,end:540505,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_interfaces.py",start:540505,end:553673,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_keyword_args.py",start:553673,end:554489,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_list.py",start:554489,end:565296,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_list_events.py",start:565296,end:573546,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_listeners.py",start:573546,end:581347,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_long_traits.py",start:581347,end:582112,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_map.py",start:582112,end:590912,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_new_notifiers.py",start:590912,end:594147,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_none.py",start:594147,end:595149,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_observe.py",start:595149,end:621021,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_pickle_validated_dict.py",start:621021,end:622052,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_prefix_list.py",start:622052,end:627139,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_prefix_map.py",start:627139,end:635023,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_property_delete.py",start:635023,end:636090,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_property_notifications.py",start:636090,end:652164,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_python_properties.py",start:652164,end:653627,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_range.py",start:653627,end:657312,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_readonly.py",start:657312,end:658501,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_regression.py",start:658501,end:671860,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_rich_compare.py",start:671860,end:680467,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_special_event_handlers.py",start:680467,end:681733,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_static_notifiers.py",start:681733,end:685650,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_str_handler.py",start:685650,end:687506,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_string.py",start:687506,end:688428,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_sync_traits.py",start:688428,end:693479,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_target.py",start:693479,end:695532,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_time.py",start:695532,end:699121,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_base.py",start:699121,end:700903,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_change_event_tracer.py",start:700903,end:706395,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_converters.py",start:706395,end:713309,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_cycle.py",start:713309,end:717279,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_default_initializer.py",start:717279,end:718798,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_dict_list_set_event.py",start:718798,end:721171,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_dict_object.py",start:721171,end:736395,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_exceptions.py",start:736395,end:737418,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_get_set.py",start:737418,end:739735,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_list_dict.py",start:739735,end:745986,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_list_object.py",start:745986,end:796873,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_prefix_list.py",start:796873,end:798212,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_set_object.py",start:798212,end:814094,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_types.py",start:814094,end:819099,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_traits.py",start:819099,end:853244,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_traits_listener.py",start:853244,end:868629,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_tuple.py",start:868629,end:870840,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_type.py",start:870840,end:872749,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_ui_notifiers.py",start:872749,end:877169,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_undefined.py",start:877169,end:878905,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_unicode_traits.py",start:878905,end:879703,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_union.py",start:879703,end:886113,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_uuid.py",start:886113,end:887090,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_validated_tuple.py",start:887090,end:888690,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_version.py",start:888690,end:890707,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_view_elements.py",start:890707,end:894356,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_weak_ref.py",start:894356,end:896280,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/tuple_test_mixin.py",start:896280,end:898970,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/README",start:898970,end:899468,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/hipt-t5.2.0-p0-float-ctrait.pkl",start:899468,end:899791,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/hipt-t5.2.0-p1-float-ctrait.pkl",start:899791,end:900089,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/hipt-t5.2.0-p2-float-ctrait.pkl",start:900089,end:900306,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/hipt-t5.2.0-p3-float-ctrait.pkl",start:900306,end:900523,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/hipt-t5.2.0-p4-float-ctrait.pkl",start:900523,end:900727,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/hipt-t5.2.0-p5-float-ctrait.pkl",start:900727,end:900931,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/generate_pickles.py",start:900931,end:902589,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/__init__.py",start:902589,end:902589,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_async_trait_wait.py",start:902589,end:905215,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_camel_case.py",start:905215,end:907022,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_clean_strings.py",start:907022,end:910491,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_deprecated.py",start:910491,end:912367,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_import_symbol.py",start:912367,end:913581,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_message_records.py",start:913581,end:915601,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_record_containers.py",start:915601,end:918071,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_record_events.py",start:918071,end:923027,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_resource.py",start:923027,end:924197,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_trait_documenter.py",start:924197,end:931478,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_traitsui_helpers.py",start:931478,end:932853,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_weakidddict.py",start:932853,end:937226,audio:0}],remote_package_size:433095,package_uuid:"2680a47f-45bb-4ae9-9c1b-48ef3b50b242"})})();