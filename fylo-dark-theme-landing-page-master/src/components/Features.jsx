const Features = () => {
  return (
    <section className='features'>
      <div className='features__grid'>
        <div className='features__item'>
          <img
            src='/images/icon-access-anywhere.svg'
            alt='Access anywhere icon'
          />
          <h4 className='features__item-primary'>
            Access your files, anywhere
          </h4>
          <p className='features__item-text'>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className='features__item'>
          <img src='/images/icon-security.svg' alt='security icon' />
          <h4 className='features__item-primary'>Security you can trust</h4>
          <p className='features__item-text'>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files
          </p>
        </div>
        <div className='features__item'>
          <img src='/images/icon-collaboration.svg' alt='collaboration icon' />
          <h4 className='features__item-primary'>Real-time collaboration</h4>
          <p className='features__item-text'>
            Securely share files and folders with friends,family and colleagues
            for live collaboration.No email attachments required.
          </p>
        </div>
        <div className='features__item'>
          <img src='/images/icon-any-file.svg' alt='any-file. icon' />
          <h4 className='features__item-primary'>Store any type of file</h4>
          <p className='features__item-text'>
            Whether your sharing holidays photos or work documents,Fylo has you
            covered allowing for all file types to be Securely stored and shared
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
