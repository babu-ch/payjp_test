import Payjp from 'payjp';

export default defineEventHandler(async (event) => {

  try {
    const config = useRuntimeConfig()
    const payjp = Payjp(config.payjpSecretKey);
    const res  = await payjp.charges.list({
      tenant: "test"
    })

    return {data: res.data.map(data => ({amount:data.amount, created_at:data.created}))}

  } catch (e:any) {
    if (e.response) {
      console.error(e.response.text);
    }
  }
  return {data:[] }
})
