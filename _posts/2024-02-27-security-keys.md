---
title: FIDO2 and TOTP Token as a Second Factor for bwHPC and NEMO2
author: NEMO Team
category: news
date: 2024-02-22
tags: [2FA, FIDO2, TOTP, Security_Key, Token]
motd: true
summary: >
    The use of a second factor to secure logins to services is becoming increasingly mandatory. bwHPC currently uses time-based one-time passwords (TOTP) or Yubico OTP as a second factor for SSH logins.
    We have looked at some hardware security tokens for bwIDM/bwHPC that can be used instead of a mobile phone.
---

The bwHPC team has been working on multi-factor authentication for some time in response to the intrusions into many HPC systems a few years ago. The use of a second factor to secure logins to services is becoming increasingly mandatory due to security threats. Standards such as Webauthn/FIDO2 make it possible to secure online services with a second factor or to use a passkey instead of passwords.

bwHPC does not currently support FIDO2/WebAuthn. For SSH logins, we continue to use time-based one-time passwords (TOTP) as a second factor. For NEMO2, we want to test FIDO2-secured SSH keys as an alternative to TOTP. You would then have to touch your FIDO2 security key every time you want to login to NEMO2 with your SSH key, for example <a href="#fido2s">[fido2s]</a>. However, another factor is no longer required.

Most FIDO2 security keys have a metal contact surface that ensures the presence of the user by touch and only then allows access to the secrets (second factors).

![FIDO2 and TOTP Token]({{ site.baseurl }}/img/posts/2024-02-20-security-keys/fido2-totp-token.jpg)

We have tested some hardware tokens that can be used for SSH logins. We selected these tokens based on the following three features: Price and the TOTP and FIDO2 features, as the first is currently used in bwIDM and the second is necessary for Passkeys and WebAuthn.

We tested pure TOTP and FIDO2 tokens, which were the cheapest, followed by security keys that enable TOTP and FIDO2, and finally two security tokens that support additional protocols.

| Product | Interface | Price | Manage TOTP | Manage FIDO2 |
| ---- | :--: | ---: | ---: | ---: |
| Feitian c200 i34 TOTP NFC | NFC (for programming) | 15€ | Windows <a href="#c200w">[c200w]</a>, Android <a href="#c200a">[c200a]</a>, iOS <a href="#c200i">[c200i]</a> | TOTP ONLY |
| Feitian A4B Series | USB | 15€ | FIDO2 ONLY | *Chrome browser <a href="#fido2c">[fido2c]</a> and Windows <a href="#c200w">[fido2w]</a> built-ins (using standard credential management features specified in <a href="#ctap2">[ctap2]</a>)* |
| Token2 T2F2 FIDO2/TOTP NFC | USB/NFC | 18€ | Android and iOS <a href="#t2f2t">[t2f2t]</a>, Windows <a href="#t2f2a">[t2f2a]</a>, Python <a href="#t2f2p">[t2f2p]</a> | Windows <a href="#t2f2mg">[t2f2mg]</a> |
| Feitian K9Plus Series | USB/*NFC(\*)* | ~30€ (depends on features) | Android <a href="#fk9a">[fk9a]</a>, iOS <a href="#fk9i">[fk9i]</a>, Windows <a href="#fk9w">[fk9w]</a> | Windows and MacOS <a href="#fk9m">[fk9m]</a>, *Linux(\*\*)* |
| YubiKey 5 Series | USB/*NFC(\*)* | >50€ | Android, iOS, Linux, Mac and Windows <a href="#yubia">[yubia]</a> | Windows, Mac and Linux <a href="#yubim">[yubim]</a> |

*(\*) Available on selected devices*
*(\*\*) Not yet publicly available (as of 20.02.2023)*

FIDO2 features such as setting a PIN for secure storage and managing FIDO2 records are already implemented in the Chrome browser <a href="#fido2c">[fido2c]</a> and Windows operating system <a href="#fido2w">[fido2w]</a>, so some of the security tokens rely on these implementations and do not provide them themselves. These tools work with any FIDO2 security key.

For one of the tokens, we have implemented software in Go that can be used to manage and display the TOTPs in Linux, Mac and Windows shells.

## Hardware TOTP Token with Display and NFC

The **Feitian c200 i34 TOTP NFC** security token is available from approx. 15€ <a href="#c200">[c200]</a>. It can be programmed with a mobile device or a computer via NFC. The software is available for Windows <a href="#c200w">[c200w]</a>, Android <a href="#c200a">[c200a]</a> and iOS <a href="#c200i">[c200i]</a>.

For Windows you need a card reader and writer <a href="#c200r">[c200r]</a>. We were able to program the TOTP seed onto the token using an AusweisApp-compatible card reader (tested under Linux with our own Go code). We did not test the Windows tool <a href="#c200wm">[c200wm]</a>.

We also tested the Android app. But it was not reliable. It took us several attempts to program the token. We tried it with two phones and repeated the steps.

We would recommend using the software from Microcosm for Android <a href="#c200am">[c200am]</a>. With this tool, we were able to program the token instantly every time we used it. The "Microcosm OTP Burner (NFC)" mobile app is easy to use <a href="#c200am">[c200am]</a>. You scan the QR code for your new TOTP and then use your phone's NFC function to program the hardware token.

If you need a TOTP, simply press the button on the token and the current TOTP will be displayed.

![Feitian c200 i34 TOTP NFC Security Token]({{ site.baseurl }}/img/posts/2024-02-20-security-keys/totp-c220.jpg)

## Inexpensive FIDO2-only Key

The **Feitian A4B series** is an inexpensive and simple FIDO2 security key. It can be used for passkeys, webauthn and FIDO2-secured SSH keys. It can be used to additionally secure Github and Gitlab, as a passkey for *Apple(\*)*, Google, *Microsoft(\*)* and Github and for FIDO2-secured SSH keys <a href="#fido2s">[fido2s]</a>. This security key only supports `ecdsa-sk` SSH keys <a href="#fido2y">[fido2y]</a>.

The token does not come with its own software. To configure the key, you must use the built-in FIDO2 configurations in the Chrome browser <a href="#fido2c">[fido2c]</a> or Windows <a href="#fido2w">[fido2w]</a>.
*(\*) Only tested with Google, other manufacturers may only support their own passkeys such as iPhones etc.*

![Feitian A4B series Security Key]({{ site.baseurl }}/img/posts/2024-02-20-security-keys/fido2-a4b.jpg)

## Affordable FIDO2 and TOTP Key with NFC

The **Token2 T2F2-NFC-Slim FIDO2, U2F and TOTP** security key would be the perfect candidate to secure SSH logins for NEMO2 and the bwHPC clusters <a href="#t2f2">[t2f2]</a>. It supports 6-digit TOTP and already has FIDO2, making it future-proof. For Windows, there is the graphical tool "FIDO2.1 Security Key Management Tool" <a href="#t2f2mg">[t2f2mg]</a> and the command line tool "FIDO2 Token Management Tool" <a href="#t2f2mc">[t2f2mc]</a> for managing FIDO2 credentials and the "TOKEN2 T2F2 Companion app for Windows" <a href="#t2f2a">[t2f2a]</a> for TOTP management.

You can use the Android and iOS apps to view and manage TOTP on your cell phone <a href="#t2f2t">[t2f2t]</a>. Unfortunately, the Android app was not very stable in our tests. The management of the TOTP did not work too often and also the display of the current TOTP code did not always work.

For Linux and Mac, you can use the Python tool "Token2 T2F2 OTP Cli tool" to configure and display TOTP codes in the console <a href="#t2f2p">[t2f2p]</a>. Under Linux, the installation requires some changes to the system and does not work immediately after unpacking. The Python program "TOTP Viewer" will display your TOTPs <a href="#t2f2v">[t2f2v]</a>, but if it is required to touch the security key before your TOTP is displayed, the 6-digit code will not be displayed in the GUI. It will be displayed in the command line that you used to start the GUI.

If you use the Python code with bwIDM TOTP, you must first convert the HEX seed displayed under the QR code on login.bwidm.de into a BASE32 seed.

Example:
`echo "<bwIDM seed>" | xxd -r -p | base32`

The code is licensed under the "Fair Source License (Version 0.9)" <a href="#fair">[fair]</a>. Download and use of the Python code is only allowed to people who have purchased the hardware. We cannot simply make it available to everyone.

These difficulties mentioned above for Mac and Linux users have led us to develop our own application with Go. This tool allows you to manage and view your TOTP entries. The program accepts HEX and BASE32 seeds and works instantly on Linux, Mac and Windows without any system changes. To view a TOTP, all you have to do is start the program and confirm your presence by touching the security key.

We can provide it precompiled for most systems, otherwise everyone is free to compile the software themselves.

However, although the Go code was made without reference to the original code, we are reluctant to make the program or code publicly available due to the "Fair Source License" of the original. As a research institution, we only want to work with public sources, as we lack the legal knowledge and time in our department to deal with licensing issues.

This security key only supports `ecdsa-sk` SSH keys <a href="#fido2y">[fido2y]</a>. If you want to use `ed25519-sk` SSH keys, you can try the "Token2 T2F2-PIN+ FIDO2, U2F and TOTP Security Key with PIN complexity feature" (according to the provider) <a href="#t2f2s">[t2f2s]</a>.

![Token2 T2F2-NFC-Slim FIDO2, U2F and TOTP Security Key]({{ site.baseurl }}/img/posts/2024-02-20-security-keys/fido2-token2.jpg)

## FIDO2 Security Key with NFC and Support for different Protocols

The security keys in the **Feitian K9/K9Plus series** support NFC and many other protocols <a href="#fk9s">[fk9s]</a> that can be customized depending on the manufacturer's website <a href="#fk9">[fk9]</a>. For example, our security key was equipped with DESFire for locking systems.

Unfortunately, we had some problems with the Android app <a href="#fk9a">[fk9a]</a>. Programming the TOTP seed could be cumbersome and displaying the TOTP on the phone didn't always work. The Windows app, on the other hand, worked quite well <a href="#fk9w">[fk9w]</a>. We did not test the iOS app <a href="#fk9i">[fk9i]</a>.

We received the software for Linux from the manufacturer, but it is not yet freely available (as of 20.02.2023). The configuration of the additional functions via the "FEITIAN SK Manager" is currently limited to Windows and MacOS <a href="#fk9m">[fk9m]</a>. This app is similar to the "YubiKey Manager" (see next section) and has a similar functionality <a href="#yubim">[yubim]</a>. If the additional protocols are required, this security key can be considered as a slightly cheaper version of the YubiKey.

This security key only supports `ecdsa-sk` SSH keys <a href="#fido2y">[fido2y]</a>.

![Feitian K9/K9Plus series Security Key]({{ site.baseurl }}/img/posts/2024-02-20-security-keys/fido2-k9plus.jpg)

## The Elephanta-Stick aka Exploding Deer aka the Swiss Army Knife aka Egg-laying Wool-milk Sow (of Security Keys)

## YubiKey 5 Series

Now we come to one of the best-known security keys, YubiKey. There are various keys from Yubico, pure Fido2 keys or keys that support various other protocols <a href="#yubi">[yubi]</a>. bwIDM also supports "Yubico OTP" in addition to TOTP <a href="#yubio">[yubio]</a>.

Prices start at 50€ upwards for these security keys <a href="#yubi5">[yubi5]</a>, for which you get the "YubiKey Manager" for Windows, Mac and Linux (GUI) and a command line tool <a href="#yubim">[yubim]</a>. And you get the "Yubico Authenticator" to manage and display your TOTPs for Android, iOS, Linux, Mac and Windows (GUI) <a href="#yubia">[yubia]</a>.

In addition to TOTP, bwIDM also supports "Yubico OTP" <a href="#yubio">[yubio]</a>. You can use "Yubico OTP" on some of the bwHPC clusters as a second factor. You do not need a display, you just need to touch the YubiKey to pass the code to the command line. The YubiKey is preconfigured for "Yubico OTP". For more information see <a href="#yubib">[yubib]</a>.

We have tested the Yubico software for Linux in recent years and have also used the TOTP app for Android. This has always run very reliably and covers all possible scenarios. We have also tested some other ways to use these keys, e.g. to secure Linux logins or password safes like KeepassXC. Some of them we have already described on the NEMO Github page <a href="#fido2s">[fido2s]</a>, for the rest of the possibilities just visit the Yubico developer page <a href="#yubid">[yubid]</a>.

![YubiKey 5 NFC]({{ site.baseurl }}/img/posts/2024-02-20-security-keys/fido2-yubikey5nfc.jpg)

## Other Possibilities for TOTP

There are many other options for TOTP than cell phones. As an example, we tested a smartwatch. We used a Garmin watch, but there are various other gadgets and watches that can do this. We show this here as an example for the app (widget) "OTP Authenticator" <a href="#otpg">[otpg]</a>.

First, the HEX seed that is displayed under the QR code on login.bwidm.de must be converted into a BASE32 seed (see example for Token2). Then all you have to do is configure the app, choose a name for the entry and insert the seed. TOTP codes are then generated every 30 seconds and you have another option for using TOTP.

![OTP Authenticator Config]({{ site.baseurl }}/img/posts/2024-02-20-security-keys/otp-authenticator.png){:width="49%"}
![TOTP App on a Garmin Watch]({{ site.baseurl }}/img/posts/2024-02-20-security-keys/totp-garmin.jpg){:width="49%"}

## Conclusion

You need a second factor for bwIDM and bwHPC and this will also be necessary in the future. Most security keys today support FIDO2/Webauthn, which you can use outside the bwHPC cluster for logins with Webauthn, Passkeys and FIDO2-secured SSH keys. There are a large number of manufacturers and providers of security keys. You can choose the key you want yourself. We have looked at the advantages and disadvantages of some of these keys.

Today you can use TOTP or Yubico OTP to log in to the clusters. We do not yet support pure FIDO2 keys. So if you want to use your token for bwIDM/bwHPC, you should choose a token that supports TOTP or Yubico OTP. However, this may come in the future.

If you want a solution that provides software for all operating systems and want flexibility when it comes to securing other things like your computer, we recommend purchasing a "YubiKey Series 5" if the budget allows.

With these security keys, you can use any device, a cell phone, a work computer or a laptop at home as a device to generate a second factor. You do not need a second device as you generate the OTP on the stick and can therefore use it on the computer you use to login. When using Yubico OTP, you don't even need any software to use the second factor, so you can use it from any workstation. We always recommend configuring the keys so that presence must be confirmed by touching the key.

We also always recommend using backups for any service that is secured by a second factor. In bwIDM, you can use a second security key, a cell phone and the "backup TAN list" as backups (backup TANs are virtually mandatory). However, if you also want to use your security key for other services that do not offer backups, we recommend that you buy and register two security keys (e.g. YubiKey 5 NFC and YubiKey 5 Nano).

## References

- <a id="a4b">[a4b]</a> <https://www.ftsafe.com/Products/FIDO/Single_Button_FIDO>
- <a id="c200">[c200]</a> <https://www.ftsafe.com/Products/OTP/Single_Button_OTP>
- <a id="c200a">[c200a]</a> <https://fido.ftsafe.com/feitian-authenticator-tool-for-android-os/>
- <a id="c200am">[c200am]</a> <https://de.microcosm.com/start/otp/programmable-oath-tokens-replace-authenticator-apps>
- <a id="c200i">[c200i]</a> <https://fido.ftsafe.com/feitian-authenticator-tool-for-ios/>
- <a id="c200r">[c200r]</a> <https://shop.ftsafe.us/products/r502>
- <a id="c200w">[c200w]</a> <https://ftsafe.us/knowledge-base/programming-nfc-otp-tokens-and-cards-on-windows-os/>
- <a id="c200wm">[c200wm]</a> <https://de.microcosm.com/start/otp/programming-oath-otp-windows>
- <a id="ctap2">[ctap2]</a> <https://fidoalliance.org/specs/fido-v2.2-rd-20230321/fido-client-to-authenticator-protocol-v2.2-rd-20230321.html>
- <a id="fair">[fair]</a> <https://fair.io/>
- <a id="fido2c">[fido2c]</a> <https://www.token2.com/site/page/managing-t2f2-fido2-keys-under-macos-or-linux>
- <a id="fido2s">[fido2s]</a> <https://github.com/nemo-cluster/yubikey>
- <a id="fido2y">[fido2y]</a> <https://developers.yubico.com/SSH/Securing_SSH_with_FIDO2.html>
- <a id="fido2w">[fido2w]</a> <https://www.token2.com/site/page/managing-fido2-keys-using-windows-control-panel>
- <a id="fk9">[fk9]</a> <https://www.ftsafe.com/products/FIDO/NFC>
- <a id="fk9a">[fk9a]</a> <https://fido.ftsafe.com/feitian-authenticator-tool-for-android-os/>
- <a id="fk9i">[fk9i]</a> <https://fido.ftsafe.com/feitian-authenticator-tool-for-ios/>
- <a id="fk9m">[fk9m]</a> <https://fido.ftsafe.com/feitian-sk-manager-tool-user-manual/>
- <a id="fk9s">[fk9s]</a> <https://fido.ftsafe.com/2-factor-authentication-related/>
- <a id="fk9w">[fk9w]</a> <https://fido.ftsafe.com/feitian-authenticator-tool-usage-for-windows-os/>
- <a id="otpg">[otpg]</a> <https://apps.garmin.com/apps/c601e351-9fa8-4303-aead-441251559064>
- <a id="t2f2">[t2f2]</a> <https://www.token2.com/shop/product/token2-t2f2-nfc-slim-fido2-u2f-and-totp-security-key>
- <a id="t2f2a">[t2f2a]</a> <https://www.token2.com/site/page/t2f2-totp-authenticator>
- <a id="t2f2c">[t2f2c]</a> <https://www.token2.com/site/page/token2-t2f2-companion-app-for-windows-v0-3>
- <a id="t2f2mc">[t2f2mc]</a> <https://www.token2.com/site/page/fido2-token-management-tool-fido2-manage-exe>
- <a id="t2f2mg">[t2f2mg]</a> <https://www.token2.com/site/page/fido2-1-security-key-management-tool-gui-for-fido2-manage-exe>
- <a id="t2f2p">[t2f2p]</a> <https://www.token2.com/site/page/token2-t2f2-otp-cli-tool>
- <a id="t2f2s">[t2f2s]</a> <https://www.token2.com/shop/product/token2-t2f2-pin-fido2-u2f-and-totp-security-key-with-pin-complexity-feature>
- <a id="t2f2t">[t2f2t]</a> <https://www.token2.com/site/page/tools-for-fido-security-keys>
- <a id="t2f2v">[t2f2v]</a> <https://www.token2.com/site/page/totp-viewer-a-gui-wrapper-for-t2f2-otp-cli-python-script>
- <a id="yubi">[yubi]</a> <https://www.yubico.com/>
- <a id="yubi5">[yubi5]</a> <https://www.yubico.com/setup/yubikey-5-series/>
- <a id="yubia">[yubia]</a> <https://www.yubico.com/products/yubico-authenticator/>
- <a id="yubib">[yubib]</a> <https://wiki.bwhpc.de/e/Registration/2FA#Registering_a_new_YubiKey_OTP_Token>
- <a id="yubid">[yubid]</a> <https://developers.yubico.com/>
- <a id="yubim">[yubim]</a> <https://www.yubico.com/support/download/yubikey-manager/>
- <a id="yubio">[yubio]</a> <https://developers.yubico.com/OTP/OTPs_Explained.html>
