import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

import { useUserContext } from '../components/context/userContext'
import Header from '../components/pure/header'
import { httpsRequest } from '../assets/config/axios'
import { swalAlert } from '../assets/config/swal'

import '../styles/profile.css'
import { IoEyeOffOutline, IoEyeOutline, IoPersonSharp } from 'react-icons/io5'


const Profile = () => {

  const { register, handleSubmit } = useForm()
  const { user } = useUserContext()
  const [showPass, setShowPass] = useState(false)

  const uploadRef = useRef()

  const uploadFiles = () => {
    uploadRef.current.click()
  }

  const [preview, setPreview] = useState(null)
  const [image, setImage] = useState("")

  const previewImages = (element) => {

    const file = element.target.files[0]
    if (file && file.type.substring(0, 5) === 'image') {
      setPreview(file)
    } else {
      setPreview(null)
    }

  }

  const filterData = (data) => {
    const filterData = {}
    for (const prop in data) {
      if (data[prop] !== '')
        filterData[prop] = data[prop]
    }
    return filterData
  }

  useEffect(() => {

    if (preview) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result.toString())
      }
      reader.readAsDataURL(preview)
    } else {
      setImage('')
    }

  }, [preview])

  const changeData = async (data) => {
    try {
      const res = await httpsRequest(
        'put',
        `https://c7-32-back.herokuapp.com/api/profile/updateprofile/`,
        {
          data: filterData(data),
          id: user.id
        }
      )
      console.log(await res)
      swalAlert('success', 'Cambio exitoso', 'Tus datos han sido modificados.')
    } catch (error) {
      swalAlert('error', 'Oops', error.response.data.error)
    }
  }

  const showPassword = () => {
    let pass = ""
    for (let i = 0; i <= user.password.length; i++) {
      pass += "*"
    }
    return pass
  }

  return (

    <div>
      <Header title='Profile' id='space' show={true} />
      <main className='profile-container'>

        <section className='profile-user'>
          {user.image ?
            <img src={user.image} alt='User image' />
            :
            image ?
              <img src={image} alt='User image' />
              :
              (
                <div className='bg-image'>
                  <IoPersonSharp className='icon-image' />
                </div>
              )
          }
          <div className='div-file'>
            <input type='file' accept='image/*' ref={uploadRef} onChange={previewImages} />
            <button className='file-btn' onClick={uploadFiles}>Subir imagen</button>
            <p>Suba una imagen para su perfil</p>
          </div>

        </section>
        <section className='profile-data'>
          <form className='data-form' onSubmit={handleSubmit(changeData)}>
            <input
              className='first'
              type='text'
              placeholder={user.name}
              {...register('name')}
            />
            <input
              type='text'
              placeholder={user.surname}
              style={{ textTransform: 'capitalize' }}
              {...register('surname')}
            />
            <input
              type='email'
              placeholder={user.email}
              {...register('email')}
            />
            <div className='pass'>
              <input
                type={showPass ? 'text' : 'password'}
                placeholder={showPass ? user.password : showPassword()}
                {...register('password')}
              />
              {showPass ?
                (<IoEyeOutline className='icon-pass' onClick={() => setShowPass(!showPass)} />)
                :
                (<IoEyeOffOutline className='icon-pass' onClick={() => setShowPass(!showPass)} />)
              }
            </div>
            <input
              type='text'
              placeholder='País'
              value={user.country === null ? "" : user.country}
              style={{ textTransform: 'capitalize' }}
              {...register('country')}
            />
            <input
              type='number'
              placeholder='Teléfono'
              value={user.phone === null ? "" : user.phone}
              {...register('phone')}
            />

            <button type='submit' className='data-sub'>Guardar cambios</button>
          </form>
        </section>

      </main>
    </div>
  )
}

export default Profile
