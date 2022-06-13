const getCount = str => str.split('').filter(el=> el=='a' ||el=='i'||el=='u'||el=='e'||el=='o').length;


console.log(getCount('asartyui'));