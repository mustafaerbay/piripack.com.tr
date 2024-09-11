<script>
    import {
        Footer,
        FooterCopyright,
        FooterLinkGroup,
        FooterBrand,
        FooterLink,
    } from "flowbite-svelte";
</script>

<Footer footerType="logo">
    <div class="sm:flex sm:items-center sm:justify-between">
        <FooterBrand
            href="https://piripack.com.tr"
            src="/images/logo.png"
            alt="PiriPack Logo"
            name="PiriPack"
        />
        <FooterLinkGroup
            ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
        >
            <FooterLink href="/about">Hakkımızda</FooterLink>
            <!-- <FooterLink href="/">Privacy Policy</FooterLink> -->
            <!-- <FooterLink href="/">Licensing</FooterLink> -->
            <FooterLink href="/contact">İletişim</FooterLink>
        </FooterLinkGroup>
    </div>
    <!-- <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> -->
    <!-- <FooterCopyright href="/" by="PiriPack" aClass="" /> -->
</Footer>
